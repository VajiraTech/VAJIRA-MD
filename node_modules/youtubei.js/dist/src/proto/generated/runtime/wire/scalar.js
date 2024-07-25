import Long from "../Long.js";
import { decode as decodeVarint, encode as encodeVarint } from "./varint.js";
import { decode as decodeZigzag, encode as encodeZigzag } from "./zigzag.js";
import { concat } from "./serialize.js";
import { WireType } from "./index.js";
const decodeVarintFns = {
    int32: (long) => long[0] | 0,
    int64: (long) => long.toString(true),
    uint32: (long) => long[0] >>> 0,
    uint64: (long) => long.toString(false),
    sint32: (long) => decodeZigzag(long[0]),
    sint64: (long) => decodeZigzag(long).toString(true),
    bool: (long) => long[0] !== 0,
};
const encodeVarintFns = {
    int32: (tsValue) => new Long(tsValue),
    int64: (tsValue) => Long.parse(tsValue),
    uint32: (tsValue) => new Long(tsValue),
    uint64: (tsValue) => Long.parse(tsValue),
    sint32: (tsValue) => encodeZigzag(new Long(tsValue)),
    sint64: (tsValue) => encodeZigzag(Long.parse(tsValue)),
    bool: (tsValue) => new Long(+tsValue),
};
const varintFieldToTsValueFns = Object.fromEntries(Object.entries(decodeVarintFns).map(([type, fn]) => [
    type,
    (wireValue) => {
        if (wireValue.type !== WireType.Varint)
            return;
        return fn(wireValue.value);
    },
]));
const tsValueToVarintFieldFns = Object.fromEntries(Object.entries(encodeVarintFns).map(([type, fn]) => ([
    type,
    (tsValue) => ({
        type: WireType.Varint,
        value: fn(tsValue),
    }),
])));
export const wireValueToTsValueFns = Object.assign(Object.assign({}, varintFieldToTsValueFns), { double: (wireValue) => {
        if (wireValue.type !== WireType.Fixed64)
            return;
        const dataview = new DataView(wireValue.value.buffer);
        return dataview.getFloat64(0, true);
    }, float: (wireValue) => {
        if (wireValue.type !== WireType.Fixed32)
            return;
        const dataview = new DataView(new Uint32Array([wireValue.value]).buffer);
        return dataview.getFloat32(0, true);
    }, fixed32: (wireValue) => {
        if (wireValue.type !== WireType.Fixed32)
            return;
        return wireValue.value >>> 0;
    }, fixed64: (wireValue) => {
        if (wireValue.type !== WireType.Fixed64)
            return;
        return wireValue.value.toString(false);
    }, sfixed32: (wireValue) => {
        if (wireValue.type !== WireType.Fixed32)
            return;
        return wireValue.value | 0;
    }, sfixed64: (wireValue) => {
        if (wireValue.type !== WireType.Fixed64)
            return;
        return wireValue.value.toString(true);
    }, string: (wireValue) => {
        if (wireValue.type !== WireType.LengthDelimited)
            return;
        const textDecoder = new TextDecoder();
        return textDecoder.decode(wireValue.value);
    }, bytes: (wireValue) => {
        if (wireValue.type !== WireType.LengthDelimited)
            return;
        return wireValue.value;
    } });
export const tsValueToWireValueFns = Object.assign(Object.assign({}, tsValueToVarintFieldFns), { double: (tsValue) => {
        const long = new Long();
        const dataview = new DataView(long.buffer);
        dataview.setFloat64(0, tsValue, true);
        return { type: WireType.Fixed64, value: long };
    }, float: (tsValue) => {
        const u32 = new Uint32Array(1);
        const dataview = new DataView(u32.buffer);
        dataview.setFloat32(0, tsValue, true);
        return { type: WireType.Fixed32, value: dataview.getUint32(0, true) };
    }, fixed32: (tsValue) => ({ type: WireType.Fixed32, value: tsValue >>> 0 }), fixed64: (tsValue) => ({
        type: WireType.Fixed64,
        value: Long.parse(tsValue),
    }), sfixed32: (tsValue) => ({ type: WireType.Fixed32, value: tsValue | 0 }), sfixed64: (tsValue) => ({
        type: WireType.Fixed64,
        value: Long.parse(tsValue),
    }), string: (tsValue) => {
        const textEncoder = new TextEncoder();
        return {
            type: WireType.LengthDelimited,
            value: textEncoder.encode(tsValue),
        };
    }, bytes: (tsValue) => ({ type: WireType.LengthDelimited, value: tsValue }) });
const unpackVarintFns = Object.fromEntries(Object.keys(decodeVarintFns).map((type) => [
    type,
    function* (wireValues) {
        for (const wireValue of wireValues) {
            const value = wireValueToTsValueFns[type](wireValue);
            if (value != null)
                yield value;
            else {
                for (const long of unpackVarint(wireValue)) {
                    yield decodeVarintFns[type](long);
                }
            }
        }
    },
]));
export const unpackFns = Object.assign(Object.assign({}, unpackVarintFns), { *double(wireValues) {
        for (const wireValue of wireValues) {
            const value = wireValueToTsValueFns.double(wireValue);
            if (value != null)
                yield value;
            else
                yield* unpackDouble(wireValue);
        }
    },
    *float(wireValues) {
        for (const wireValue of wireValues) {
            const value = wireValueToTsValueFns.float(wireValue);
            if (value != null)
                yield value;
            else
                yield* unpackFloat(wireValue);
        }
    },
    *fixed32(wireValues) {
        for (const wireValue of wireValues) {
            const value = wireValueToTsValueFns.fixed32(wireValue);
            if (value != null)
                yield value;
            else
                for (const value of unpackFixed32(wireValue))
                    yield value >>> 0;
        }
    },
    *fixed64(wireValues) {
        for (const wireValue of wireValues) {
            const value = wireValueToTsValueFns.fixed64(wireValue);
            if (value != null)
                yield value;
            else {
                for (const value of unpackFixed64(wireValue)) {
                    yield value.toString(false);
                }
            }
        }
    },
    *sfixed32(wireValues) {
        for (const wireValue of wireValues) {
            const value = wireValueToTsValueFns.sfixed32(wireValue);
            if (value != null)
                yield value;
            else
                for (const value of unpackFixed32(wireValue))
                    yield value | 0;
        }
    },
    *sfixed64(wireValues) {
        for (const wireValue of wireValues) {
            const value = wireValueToTsValueFns.sfixed64(wireValue);
            if (value != null)
                yield value;
            else {
                for (const value of unpackFixed64(wireValue)) {
                    yield value.toString(true);
                }
            }
        }
    } });
const packVarintFns = Object.fromEntries(Object.keys(encodeVarintFns).map((type) => [
    type,
    function (tsValues) {
        return {
            type: WireType.LengthDelimited,
            value: concat(tsValues.map((tsValue) => {
                const value = encodeVarintFns[type](tsValue);
                return encodeVarint(value);
            })),
        };
    },
]));
function getFixedPackFn(size, setFn) {
    return function pack(values) {
        const value = new Uint8Array(values.length * size);
        const dataview = new DataView(value.buffer);
        for (let i = 0; i < values.length; ++i) {
            setFn(dataview, i * size, values[i]);
        }
        return { type: WireType.LengthDelimited, value };
    };
}
export const packFns = Object.assign(Object.assign({}, packVarintFns), { double: getFixedPackFn(8, (dataView, byteOffset, value) => {
        dataView.setFloat64(byteOffset, value, true);
    }), float: getFixedPackFn(4, (dataView, byteOffset, value) => {
        dataView.setFloat32(byteOffset, value, true);
    }), fixed32: getFixedPackFn(4, (dataView, byteOffset, value) => {
        dataView.setUint32(byteOffset, value, true);
    }), fixed64: getFixedPackFn(8, (dataView, byteOffset, value) => {
        const long = Long.parse(value);
        dataView.setUint32(byteOffset, long[0], true);
        dataView.setUint32(byteOffset + 4, long[1], true);
    }), sfixed32: getFixedPackFn(4, (dataView, byteOffset, value) => {
        dataView.setInt32(byteOffset, value, true);
    }), sfixed64: getFixedPackFn(8, (dataView, byteOffset, value) => {
        const long = Long.parse(value);
        dataView.setUint32(byteOffset, long[0], true);
        dataView.setUint32(byteOffset + 4, long[1], true);
    }) });
function* unpackDouble(wireValue) {
    if (wireValue.type !== WireType.LengthDelimited)
        return;
    const { value } = wireValue;
    let idx = 0;
    const dataview = new DataView(value.buffer, value.byteOffset);
    while (idx < value.length) {
        const double = dataview.getFloat64(idx, true);
        idx += 4;
        yield double;
    }
}
function* unpackFloat(wireValue) {
    if (wireValue.type !== WireType.LengthDelimited)
        return;
    const { value } = wireValue;
    let idx = 0;
    const dataview = new DataView(value.buffer, value.byteOffset);
    while (idx < value.length) {
        const float = dataview.getFloat32(idx, true);
        idx += 4;
        yield float;
    }
}
function* unpackVarint(wireValue) {
    if (wireValue.type !== WireType.LengthDelimited)
        return;
    const { value } = wireValue;
    let idx = 0;
    const offset = value.byteOffset;
    while (idx < value.length) {
        const decodeResult = decodeVarint(new DataView(value.buffer, offset + idx));
        idx += decodeResult[0];
        yield decodeResult[1];
    }
}
function* unpackFixed32(wireValue) {
    if (wireValue.type !== WireType.LengthDelimited)
        return;
    const { value } = wireValue;
    let idx = 0;
    const dataview = new DataView(value.buffer, value.byteOffset);
    while (idx < value.length) {
        const fixed32 = dataview.getUint32(idx, true);
        idx += 4;
        yield fixed32;
    }
}
function* unpackFixed64(wireValue) {
    if (wireValue.type !== WireType.LengthDelimited)
        return;
    const { value } = wireValue;
    let idx = 0;
    const dataview = new DataView(value.buffer, value.byteOffset);
    while (idx < value.length) {
        const lo = dataview.getUint32(idx, true);
        idx += 4;
        const hi = dataview.getUint32(idx, true);
        idx += 4;
        yield new Long(lo, hi);
    }
}
//# sourceMappingURL=scalar.js.map