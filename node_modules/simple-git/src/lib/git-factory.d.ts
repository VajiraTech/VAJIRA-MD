import { SimpleGitFactory } from '../../typings';
import { SimpleGitOptions } from './types';
/**
 * Adds the necessary properties to the supplied object to enable it for use as
 * the default export of a module.
 *
 * Eg: `module.exports = esModuleFactory({ something () {} })`
 */
export declare function esModuleFactory<T>(defaultExport: T): T & {
    __esModule: true;
    default: T;
};
export declare function gitExportFactory<T = {}>(factory: SimpleGitFactory, extra: T): ((options: Partial<SimpleGitOptions>) => import("../../typings").SimpleGit) & {
    CheckRepoActions: typeof import("./tasks/check-is-repo").CheckRepoActions;
    CleanOptions: typeof import("./tasks/clean").CleanOptions;
    GitConfigScope: typeof import("./tasks/config").GitConfigScope;
    GitConstructError: typeof import("./errors/git-construct-error").GitConstructError;
    GitError: typeof import("./errors/git-error").GitError;
    GitPluginError: typeof import("./errors/git-plugin-error").GitPluginError;
    GitResponseError: typeof import("./errors/git-response-error").GitResponseError;
    ResetMode: typeof import("./tasks/reset").ResetMode;
    TaskConfigurationError: typeof import("./errors/task-configuration-error").TaskConfigurationError;
    grepQueryBuilder: typeof import("./tasks/grep").grepQueryBuilder;
};
export declare function gitInstanceFactory(baseDir?: string | Partial<SimpleGitOptions>, options?: Partial<SimpleGitOptions>): any;
