"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIgnoreTask = void 0;
const CheckIgnore_1 = require("../responses/CheckIgnore");
function checkIgnoreTask(paths) {
    return {
        commands: ['check-ignore', ...paths],
        format: 'utf-8',
        parser: CheckIgnore_1.parseCheckIgnore,
    };
}
exports.checkIgnoreTask = checkIgnoreTask;
//# sourceMappingURL=check-ignore.js.map