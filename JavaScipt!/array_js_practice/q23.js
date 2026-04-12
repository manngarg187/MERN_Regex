// 23. Find the intersection of two arrays.

let arr1 = [2,3,4,2];
let arr2 = [7,2,4,5];

//method 1
// let result = arr1.filter((val) => {
//     if (arr2.some(hero=> hero===val)){
//         return val;
//     }
// })
// console.log([...new Set(result)]);

//method 2
let result = arr1.filter((val)=>arr2.includes(val));
console.log(... new Set(result));
