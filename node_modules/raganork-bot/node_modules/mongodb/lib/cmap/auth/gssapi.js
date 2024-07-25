"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GSSAPI = void 0;
const dns = require("dns");
const deps_1 = require("../../deps");
const error_1 = require("../../error");
const utils_1 = require("../../utils");
const auth_provider_1 = require("./auth_provider");
class GSSAPI extends auth_provider_1.AuthProvider {
    auth(authContext, callback) {
        const { connection, credentials } = authContext;
        if (credentials == null)
            return callback(new error_1.MongoMissingCredentialsError('Credentials required for GSSAPI authentication'));
        const { username } = credentials;
        function externalCommand(command, cb) {
            return connection.command((0, utils_1.ns)('$external.$cmd'), command, undefined, cb);
        }
        makeKerberosClient(authContext, (err, client) => {
            if (err)
                return callback(err);
            if (client == null)
                return callback(new error_1.MongoMissingDependencyError('GSSAPI client missing'));
            client.step('', (err, payload) => {
                if (err)
                    return callback(err);
                externalCommand(saslStart(payload), (err, result) => {
                    if (err)
                        return callback(err);
                    if (result == null)
                        return callback();
                    negotiate(client, 10, result.payload, (err, payload) => {
                        if (err)
                            return callback(err);
                        externalCommand(saslContinue(payload, result.conversationId), (err, result) => {
                            if (err)
                                return callback(err);
                            if (result == null)
                                return callback();
                            finalize(client, username, result.payload, (err, payload) => {
                                if (err)
                                    return callback(err);
                                externalCommand({
                                    saslContinue: 1,
                                    conversationId: result.conversationId,
                                    payload
                                }, (err, result) => {
                                    if (err)
                                        return callback(err);
                                    callback(undefined, result);
                                });
                            });
                        });
                    });
                });
            });
        });
    }
}
exports.GSSAPI = GSSAPI;
function makeKerberosClient(authContext, callback) {
    var _a;
    const { hostAddress } = authContext.options;
    const { credentials } = authContext;
    if (!hostAddress || typeof hostAddress.host !== 'string' || !credentials) {
        return callback(new error_1.MongoInvalidArgumentError('Connection must have host and port and credentials defined.'));
    }
    if ('kModuleError' in deps_1.Kerberos) {
        return callback(deps_1.Kerberos['kModuleError']);
    }
    const { initializeClient } = deps_1.Kerberos;
    const { username, password } = credentials;
    const mechanismProperties = credentials.mechanismProperties;
    const serviceName = (_a = mechanismProperties.SERVICE_NAME) !== null && _a !== void 0 ? _a : 'mongodb';
    performGssapiCanonicalizeHostName(hostAddress.host, mechanismProperties, (err, host) => {
        if (err)
            return callback(err);
        const initOptions = {};
        if (password != null) {
            Object.assign(initOptions, { user: username, password: password });
        }
        let spn = `${serviceName}${process.platform === 'win32' ? '/' : '@'}${host}`;
        if ('SERVICE_REALM' in mechanismProperties) {
            spn = `${spn}@${mechanismProperties.SERVICE_REALM}`;
        }
        initializeClient(spn, initOptions, (err, client) => {
            // TODO(NODE-3483)
            if (err)
                return callback(new error_1.MongoRuntimeError(err));
            callback(undefined, client);
        });
    });
}
function saslStart(payload) {
    return {
        saslStart: 1,
        mechanism: 'GSSAPI',
        payload,
        autoAuthorize: 1
    };
}
function saslContinue(payload, conversationId) {
    return {
        saslContinue: 1,
        conversationId,
        payload
    };
}
function negotiate(client, retries, payload, callback) {
    client.step(payload, (err, response) => {
        // Retries exhausted, raise error
        if (err && retries === 0)
            return callback(err);
        // Adjust number of retries and call step again
        if (err)
            return negotiate(client, retries - 1, payload, callback);
        // Return the payload
        callback(undefined, response || '');
    });
}
function finalize(client, user, payload, callback) {
    // GSS Client Unwrap
    client.unwrap(payload, (err, response) => {
        if (err)
            return callback(err);
        // Wrap the response
        client.wrap(response || '', { user }, (err, wrapped) => {
            if (err)
                return callback(err);
            // Return the payload
            callback(undefined, wrapped);
        });
    });
}
function performGssapiCanonicalizeHostName(host, mechanismProperties, callback) {
    if (!mechanismProperties.gssapiCanonicalizeHostName)
        return callback(undefined, host);
    // Attempt to resolve the host name
    dns.resolveCname(host, (err, r) => {
        if (err)
            return callback(err);
        // Get the first resolve host id
        if (Array.isArray(r) && r.length > 0) {
            return callback(undefined, r[0]);
        }
        callback(undefined, host);
    });
}
//# sourceMappingURL=gssapi.js.map