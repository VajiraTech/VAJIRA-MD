class ChildElement {
    constructor(data) {
        var _a, _b;
        this.text = ((_b = (_a = data.type.textType) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.content) || null;
        this.properties = data.properties;
        if (data.childElements) {
            this.child_elements = data.childElements.map((el) => new ChildElement(el));
        }
    }
}
ChildElement.type = 'ChildElement';
export default ChildElement;
//# sourceMappingURL=ChildElement.js.map