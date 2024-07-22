"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeWorkingDirectoryTask = void 0;
const utils_1 = require("../utils");
const task_1 = require("./task");
function changeWorkingDirectoryTask(directory, root) {
    return task_1.adhocExecTask((instance) => {
        if (!utils_1.folderExists(directory)) {
            throw new Error(`Git.cwd: cannot change to non-directory "${directory}"`);
        }
        return ((root || instance).cwd = directory);
    });
}
exports.changeWorkingDirectoryTask = changeWorkingDirectoryTask;
//# sourceMappingURL=change-working-directory.js.map