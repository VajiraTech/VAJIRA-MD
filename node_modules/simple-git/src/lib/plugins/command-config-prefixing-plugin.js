"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandConfigPrefixingPlugin = void 0;
const utils_1 = require("../utils");
function commandConfigPrefixingPlugin(configuration) {
    const prefix = utils_1.prefixedArray(configuration, '-c');
    return {
        type: 'spawn.args',
        action(data) {
            return [...prefix, ...data];
        },
    };
}
exports.commandConfigPrefixingPlugin = commandConfigPrefixingPlugin;
//# sourceMappingURL=command-config-prefixing-plugin.js.map