// 5. Sum all numeric values of an object.

let data = {a:23,b:82,c:23,glory:"sure",d:4};

function number_sum(obj){
    let result = Object.entries(obj).reduce((acc,val)=>{
        if (typeof val[1] === "number"){
            acc = acc + val[1];
        }
        return acc;
    },0)
    return result;
}
console.log(number_sum(data));