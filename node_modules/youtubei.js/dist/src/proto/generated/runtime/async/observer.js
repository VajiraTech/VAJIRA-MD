import { __asyncGenerator, __await, __awaiter } from "tslib";
import { removeItem } from "../array.js";
export function defer() {
    const transit = {};
    const result = new Promise((resolve, reject) => Object.assign(transit, { resolve, reject }));
    return Object.assign(result, transit);
}
export function createSubscribeFn(next, wait = Promise.resolve()) {
    const observers = [];
    (() => __awaiter(this, void 0, void 0, function* () {
        try {
            yield wait;
            while (observers.length) {
                const [value, done] = yield next();
                for (const observer of observers)
                    observer.next(value);
                if (done)
                    break;
            }
        }
        catch (err) {
            for (const observer of observers)
                observer.error(err);
        }
        finally {
            for (const observer of observers)
                observer.complete();
        }
    }))();
    return (observer) => {
        observers.push(observer);
        return () => {
            observer.complete();
            removeItem(observers, observer);
        };
    };
}
export function subscribeFnToAsyncGenerator(subscribe) {
    return __asyncGenerator(this, arguments, function* subscribeFnToAsyncGenerator_1() {
        let finished = false;
        let deferred = defer();
        const observer = {
            next(value) {
                const result = deferred;
                deferred = defer();
                result.resolve(value);
            },
            error(exception) {
                const result = deferred;
                deferred = defer();
                result.reject(exception);
            },
            complete() {
                finished = true;
                deferred.resolve(null);
            },
        };
        const unsubscribe = subscribe(observer);
        try {
            while (true) {
                const value = yield __await(deferred);
                if (finished)
                    break;
                yield yield __await(value);
            }
        }
        finally {
            unsubscribe();
        }
    });
}
//# sourceMappingURL=observer.js.map