export declare namespace $.youtube.NotificationPreferences {
    type Preference = {
        index: number;
    };
}
export type Type = $.youtube.NotificationPreferences.Preference;
export declare function getDefaultValue(): $.youtube.NotificationPreferences.Preference;
export declare function createValue(partialValue: Partial<$.youtube.NotificationPreferences.Preference>): $.youtube.NotificationPreferences.Preference;
export declare function encodeJson(value: $.youtube.NotificationPreferences.Preference): unknown;
export declare function decodeJson(value: any): $.youtube.NotificationPreferences.Preference;
export declare function encodeBinary(value: $.youtube.NotificationPreferences.Preference): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.NotificationPreferences.Preference;
