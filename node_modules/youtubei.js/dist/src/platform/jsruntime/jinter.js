import { Jinter } from 'jintr';
export default function evaluate(code, env) {
    const runtime = new Jinter(code);
    for (const [key, value] of Object.entries(env)) {
        runtime.scope.set(key, value);
    }
    return runtime.interpret();
}
//# sourceMappingURL=jinter.js.map