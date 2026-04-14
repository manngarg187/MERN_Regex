// 8. Sort object keys alphabetically.

let data = {a:5,sam:"game",c:undefined,koo:null,e:"done",f:null};

function sort_keys(obj){
    let only_keys = Object.keys(obj).toSorted();
    let result = only_keys.reduce((acc,val)=>{
        acc[val] = obj[val];
        return acc;
    },{})
    return result;
}
console.log(sort_keys(data));

