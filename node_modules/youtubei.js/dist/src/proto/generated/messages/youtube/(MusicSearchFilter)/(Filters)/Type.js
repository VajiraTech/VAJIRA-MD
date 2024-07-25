import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../../runtime/json/scalar.js";
import { default as serialize, } from "../../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        song: undefined,
        video: undefined,
        album: undefined,
        artist: undefined,
        playlist: undefined,
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.song !== undefined)
        result.song = tsValueToJsonValueFns.int32(value.song);
    if (value.video !== undefined)
        result.video = tsValueToJsonValueFns.int32(value.video);
    if (value.album !== undefined)
        result.album = tsValueToJsonValueFns.int32(value.album);
    if (value.artist !== undefined)
        result.artist = tsValueToJsonValueFns.int32(value.artist);
    if (value.playlist !== undefined)
        result.playlist = tsValueToJsonValueFns.int32(value.playlist);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.song !== undefined)
        result.song = jsonValueToTsValueFns.int32(value.song);
    if (value.video !== undefined)
        result.video = jsonValueToTsValueFns.int32(value.video);
    if (value.album !== undefined)
        result.album = jsonValueToTsValueFns.int32(value.album);
    if (value.artist !== undefined)
        result.artist = jsonValueToTsValueFns.int32(value.artist);
    if (value.playlist !== undefined)
        result.playlist = jsonValueToTsValueFns.int32(value.playlist);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.song !== undefined) {
        const tsValue = value.song;
        result.push([1, tsValueToWireValueFns.int32(tsValue)]);
    }
    if (value.video !== undefined) {
        const tsValue = value.video;
        result.push([2, tsValueToWireValueFns.int32(tsValue)]);
    }
    if (value.album !== undefined) {
        const tsValue = value.album;
        result.push([3, tsValueToWireValueFns.int32(tsValue)]);
    }
    if (value.artist !== undefined) {
        const tsValue = value.artist;
        result.push([4, tsValueToWireValueFns.int32(tsValue)]);
    }
    if (value.playlist !== undefined) {
        const tsValue = value.playlist;
        result.push([5, tsValueToWireValueFns.int32(tsValue)]);
    }
    return serialize(result);
}
export function decodeBinary(binary) {
    const result = getDefaultValue();
    const wireMessage = deserialize(binary);
    const wireFields = new Map(wireMessage);
    field: {
        const wireValue = wireFields.get(1);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.song = value;
    }
    field: {
        const wireValue = wireFields.get(2);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.video = value;
    }
    field: {
        const wireValue = wireFields.get(3);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.album = value;
    }
    field: {
        const wireValue = wireFields.get(4);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.artist = value;
    }
    field: {
        const wireValue = wireFields.get(5);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.playlist = value;
    }
    return result;
}
//# sourceMappingURL=Type.js.map