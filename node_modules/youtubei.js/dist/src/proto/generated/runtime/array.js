export function toPojoSet(arr) {
    const result = {};
    for (const item of arr)
        result[item] = item;
    return result;
}
export function removeItem(arr, item) {
    const index = arr.indexOf(item);
    arr.splice(index, 1);
    return arr;
}
export function groupBy(arr, by) {
    const result = new Map();
    for (const item of arr) {
        const key = item[by];
        if (result.has(key))
            result.get(key).push(item);
        else
            result.set(key, [item]);
    }
    return result;
}
//# sourceMappingURL=array.js.map