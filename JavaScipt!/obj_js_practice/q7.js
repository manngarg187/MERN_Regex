// 7. Create a function that inverts keys and values of an object.

// Wrong Attempt:
// let data = {a:5,b:"game",c:undefined,d:null,e:"done",f:null};

// function invert_obj(obj){
//     let result = Object.entries(data).forEach((val)=>{
//         let k = val[0];
//         val[0] = val[1];
//         val[1] = k;
//     })
//     return Object.fromEntries(result);
// }
// console.log(invert_obj(data));

// ❌ Problems in your code
// 1. forEach() returns undefined
// let result = Object.entries(data).forEach(...)
// 👉 forEach() does not return anything → result = undefined ❌

// 2. You are mutating val but not returning anything
// Even if you swap values inside forEach, nothing is collected.

// Corrected Code :
let data = {a:5,b:"game",c:undefined,d:null,e:"done",f:null};

function invert_obj(obj){
    let result = Object.entries(data).map((val)=>{
        let k = val[0];
        val[0] = val[1];
        val[1] = k;
        return val;
    })
    return Object.fromEntries(result);
}
console.log(invert_obj(data));

// Method 2:
// function invert_obj(obj) {
//   let result = Object.entries(obj).map(([key, value]) => {
//     return [value, key];
//   });

//   return Object.fromEntries(result);
// }

// console.log(invert_obj(data));