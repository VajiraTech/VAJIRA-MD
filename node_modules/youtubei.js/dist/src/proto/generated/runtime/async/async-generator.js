import { __asyncGenerator, __await, __awaiter } from "tslib";
export function fromSingle(value) {
    return __asyncGenerator(this, arguments, function* fromSingle_1() {
        yield yield __await(value);
    });
}
export function first(generator) {
    return __awaiter(this, void 0, void 0, function* () {
        const { done, value } = yield generator.next();
        if (done)
            throw Error("The generator should yield at least one value.");
        return value;
    });
}
//# sourceMappingURL=async-generator.js.map