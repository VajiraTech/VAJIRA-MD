"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completionDetectionPlugin = void 0;
const promise_deferred_1 = require("@kwsites/promise-deferred");
const utils_1 = require("../utils");
const never = promise_deferred_1.default().promise;
function completionDetectionPlugin({ onClose = true, onExit = 50 } = {}) {
    function createEvents() {
        let exitCode = -1;
        const events = {
            close: promise_deferred_1.default(),
            closeTimeout: promise_deferred_1.default(),
            exit: promise_deferred_1.default(),
            exitTimeout: promise_deferred_1.default(),
        };
        const result = Promise.race([
            onClose === false ? never : events.closeTimeout.promise,
            onExit === false ? never : events.exitTimeout.promise,
        ]);
        configureTimeout(onClose, events.close, events.closeTimeout);
        configureTimeout(onExit, events.exit, events.exitTimeout);
        return {
            close(code) {
                exitCode = code;
                events.close.done();
            },
            exit(code) {
                exitCode = code;
                events.exit.done();
            },
            get exitCode() {
                return exitCode;
            },
            result,
        };
    }
    function configureTimeout(flag, event, timeout) {
        if (flag === false) {
            return;
        }
        (flag === true ? event.promise : event.promise.then(() => utils_1.delay(flag))).then(timeout.done);
    }
    return {
        type: 'spawn.after',
        action(_data, { spawned, close }) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function* () {
                const events = createEvents();
                let deferClose = true;
                let quickClose = () => void (deferClose = false);
                (_a = spawned.stdout) === null || _a === void 0 ? void 0 : _a.on('data', quickClose);
                (_b = spawned.stderr) === null || _b === void 0 ? void 0 : _b.on('data', quickClose);
                spawned.on('error', quickClose);
                spawned.on('close', (code) => events.close(code));
                spawned.on('exit', (code) => events.exit(code));
                try {
                    yield events.result;
                    if (deferClose) {
                        yield utils_1.delay(50);
                    }
                    close(events.exitCode);
                }
                catch (err) {
                    close(events.exitCode, err);
                }
            });
        }
    };
}
exports.completionDetectionPlugin = completionDetectionPlugin;
//# sourceMappingURL=completion-detection.plugin.js.map