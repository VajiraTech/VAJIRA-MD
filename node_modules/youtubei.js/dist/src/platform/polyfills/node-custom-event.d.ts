export default class CustomEvent extends Event {
    #private;
    constructor(type: string, options?: CustomEventInit<any[]>);
    get detail(): any[] | null;
}
