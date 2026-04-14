// 3. Convert an array of objects into a single object using a specific key.

// Method-1
// let arr = [{a:5},{b:87},{c:-32}];
// let result = arr.map((val,index)=>{
//     return [index,val];
// }) 
// console.log(Object.fromEntries(result))

// Method-2
let arr = [{a:5},{b:87},{c:-32}];
let result = {...arr}
console.log(result);