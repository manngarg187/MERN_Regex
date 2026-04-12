// 27. Convert an array into a key-value map object.

let arr = ["a","b","c","d"];
let result = arr.reduce((acc,val,index)=>{
    acc[index] = val;
    return acc;
},{})
console.log(result);
