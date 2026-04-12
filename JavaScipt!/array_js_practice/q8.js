// 8. Convert a nested array into a single-level array.

let arr = [2,3,[3,5,[5,[8],9]]];
let result = arr.flat(Infinity);
console.log(result);