// 9. Sort object values numerically.

let data = {a:23,b:82,c:23,d:4};

function sort_values(obj){
    // let values = Object.values(obj).toSorted();
    // let result = Object.entries(obj).toSorted(([_ ,val1],[_ ,val2]) => val1-val2); -> Error : SyntaxError: Duplicate parameter name not allowed in this context
    let result = Object.entries(obj).toSorted(([,val1],[,val2]) => val1-val2);
    return Object.fromEntries(result);
}
console.log(sort_values(data));