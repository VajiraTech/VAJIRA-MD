"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPluginError = void 0;
const git_error_1 = require("./git-error");
class GitPluginError extends git_error_1.GitError {
    constructor(task, plugin, message) {
        super(task, message);
        this.task = task;
        this.plugin = plugin;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.GitPluginError = GitPluginError;
//# sourceMappingURL=git-plugin-error.js.map