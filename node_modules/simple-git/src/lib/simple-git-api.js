"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleGitApi = void 0;
const task_callback_1 = require("./task-callback");
const change_working_directory_1 = require("./tasks/change-working-directory");
const config_1 = require("./tasks/config");
const grep_1 = require("./tasks/grep");
const hash_object_1 = require("./tasks/hash-object");
const init_1 = require("./tasks/init");
const log_1 = require("./tasks/log");
const merge_1 = require("./tasks/merge");
const push_1 = require("./tasks/push");
const status_1 = require("./tasks/status");
const task_1 = require("./tasks/task");
const utils_1 = require("./utils");
class SimpleGitApi {
    constructor(_executor) {
        this._executor = _executor;
    }
    _runTask(task, then) {
        const chain = this._executor.chain();
        const promise = chain.push(task);
        if (then) {
            task_callback_1.taskCallback(task, promise, then);
        }
        return Object.create(this, {
            then: { value: promise.then.bind(promise) },
            catch: { value: promise.catch.bind(promise) },
            _executor: { value: chain },
        });
    }
    add(files) {
        return this._runTask(task_1.straightThroughStringTask(['add', ...utils_1.asArray(files)]), utils_1.trailingFunctionArgument(arguments));
    }
    cwd(directory) {
        const next = utils_1.trailingFunctionArgument(arguments);
        if (typeof directory === 'string') {
            return this._runTask(change_working_directory_1.changeWorkingDirectoryTask(directory, this._executor), next);
        }
        if (typeof (directory === null || directory === void 0 ? void 0 : directory.path) === 'string') {
            return this._runTask(change_working_directory_1.changeWorkingDirectoryTask(directory.path, directory.root && this._executor || undefined), next);
        }
        return this._runTask(task_1.configurationErrorTask('Git.cwd: workingDirectory must be supplied as a string'), next);
    }
    hashObject(path, write) {
        return this._runTask(hash_object_1.hashObjectTask(path, write === true), utils_1.trailingFunctionArgument(arguments));
    }
    init(bare) {
        return this._runTask(init_1.initTask(bare === true, this._executor.cwd, utils_1.getTrailingOptions(arguments)), utils_1.trailingFunctionArgument(arguments));
    }
    merge() {
        return this._runTask(merge_1.mergeTask(utils_1.getTrailingOptions(arguments)), utils_1.trailingFunctionArgument(arguments));
    }
    mergeFromTo(remote, branch) {
        if (!(utils_1.filterString(remote) && utils_1.filterString(branch))) {
            return this._runTask(task_1.configurationErrorTask(`Git.mergeFromTo requires that the 'remote' and 'branch' arguments are supplied as strings`));
        }
        return this._runTask(merge_1.mergeTask([remote, branch, ...utils_1.getTrailingOptions(arguments)]), utils_1.trailingFunctionArgument(arguments, false));
    }
    outputHandler(handler) {
        this._executor.outputHandler = handler;
        return this;
    }
    push() {
        const task = push_1.pushTask({
            remote: utils_1.filterType(arguments[0], utils_1.filterString),
            branch: utils_1.filterType(arguments[1], utils_1.filterString),
        }, utils_1.getTrailingOptions(arguments));
        return this._runTask(task, utils_1.trailingFunctionArgument(arguments));
    }
    stash() {
        return this._runTask(task_1.straightThroughStringTask(['stash', ...utils_1.getTrailingOptions(arguments)]), utils_1.trailingFunctionArgument(arguments));
    }
    status() {
        return this._runTask(status_1.statusTask(utils_1.getTrailingOptions(arguments)), utils_1.trailingFunctionArgument(arguments));
    }
}
exports.SimpleGitApi = SimpleGitApi;
Object.assign(SimpleGitApi.prototype, config_1.default(), grep_1.default(), log_1.default());
//# sourceMappingURL=simple-git-api.js.map