// 28. Find duplicate elements in an array.

let arr = ["a","b","a","d","d","e","a"];
let result = arr.filter((val, index) => {
    return arr.indexOf(val) !== index;
});
console.log([...new Set(result)]);