export declare namespace $.youtube {
    type VisitorData = {
        id: string;
        timestamp: number;
    };
}
export type Type = $.youtube.VisitorData;
export declare function getDefaultValue(): $.youtube.VisitorData;
export declare function createValue(partialValue: Partial<$.youtube.VisitorData>): $.youtube.VisitorData;
export declare function encodeJson(value: $.youtube.VisitorData): unknown;
export declare function decodeJson(value: any): $.youtube.VisitorData;
export declare function encodeBinary(value: $.youtube.VisitorData): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.VisitorData;
