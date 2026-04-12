// 24. Find the difference between two arrays.
// Meaning of question : For each element in arr1 Keep it only if it is NOT in arr2

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let result = arr1.filter(val => !arr2.includes(val));

console.log(result);