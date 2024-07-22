import { Type as Preference } from "./(NotificationPreferences)/Preference.js";
export declare namespace $.youtube {
    type NotificationPreferences = {
        channelId: string;
        prefId?: Preference;
        number0?: number;
        number1?: number;
    };
}
export type Type = $.youtube.NotificationPreferences;
export declare function getDefaultValue(): $.youtube.NotificationPreferences;
export declare function createValue(partialValue: Partial<$.youtube.NotificationPreferences>): $.youtube.NotificationPreferences;
export declare function encodeJson(value: $.youtube.NotificationPreferences): unknown;
export declare function decodeJson(value: any): $.youtube.NotificationPreferences;
export declare function encodeBinary(value: $.youtube.NotificationPreferences): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.NotificationPreferences;
