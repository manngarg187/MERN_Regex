// 6. Remove properties with null or undefined values.

// Method 1:
// let data = {a:5,b:"game",c:undefined,d:null,e:"done",f:null};
// for (let key in data){
//     if (data[key]===undefined || data[key]===null){
//         delete data[key];
//     }
// }
// console.log(data);

// Method 2:
let data = {a:5,b:"game",c:undefined,d:null,e:"done",f:null};
function clear_data(obj){
    result = Object.entries(obj).filter((val)=>{
        // return val[1]!==null || val[1]!==undefined; -> Silly Mistake
        return val[1]!==null && val[1]!==undefined;
    })
    return Object.fromEntries(result);
}
console.log(clear_data(data));