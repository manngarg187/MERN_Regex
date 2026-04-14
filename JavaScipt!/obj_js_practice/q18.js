// 18. Create an object from two arrays (keys and values).

// Method 1:
// let keys = ["a", "b", "c"];
// let values = [1, 2, 3];
// let obj={};
// for (let i=0; i<keys.length; i++){
//     obj[keys[i]] = values[i];
// }
// console.log(obj);

// Method 2:
let keys = ["a", "b", "c"];
let values = [1, 2, 3];
let result = keys.map((val,index) =>{
    return [val,values[index]];
})
let final = Object.fromEntries(result);
console.log(final);