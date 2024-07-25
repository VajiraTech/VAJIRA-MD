"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitExecutor = void 0;
const git_executor_chain_1 = require("./git-executor-chain");
class GitExecutor {
    constructor(binary = 'git', cwd, _scheduler, _plugins) {
        this.binary = binary;
        this.cwd = cwd;
        this._scheduler = _scheduler;
        this._plugins = _plugins;
        this._chain = new git_executor_chain_1.GitExecutorChain(this, this._scheduler, this._plugins);
    }
    chain() {
        return new git_executor_chain_1.GitExecutorChain(this, this._scheduler, this._plugins);
    }
    push(task) {
        return this._chain.push(task);
    }
}
exports.GitExecutor = GitExecutor;
//# sourceMappingURL=git-executor.js.map