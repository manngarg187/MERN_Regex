// 2. Convert an array into an object where keys are indexes and values are elements.

// Method 1
// let arr = ["a","gk","pno",23,"grt"];
// let result = arr.reduce((acc,val,index)=>{
//     acc[index]=val;
//     return acc;
// },{})
// console.log(result);

// Method 2: 
function arrayToObject(arr) {
  let entries = arr.map((value, index) => [index, value]);
  return Object.fromEntries(entries);
}
console.log(arrayToObject(["a", "b", "c"]));