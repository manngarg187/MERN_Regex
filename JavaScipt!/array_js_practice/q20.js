// 20. Find the second largest number in an array.

let arr = [10, 5, 20, 8, 20, 15];
let arr2 = [...new Set(arr)];
let arr3 = arr2.toSorted((a,b)=>a-b);
console.log(arr3[1]);