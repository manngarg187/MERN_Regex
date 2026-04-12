// 10. Find the index of the last occurrence of a value.

let arr = ["a", "b", "c", "b", "d", "b"];
let result = arr.reduce((acc, curr, i) => {
    if (curr === "b") {
        return i;
    }
    return acc;
}, -1);
console.log(result);
