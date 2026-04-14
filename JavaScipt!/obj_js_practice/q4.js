// 4. Find the property with the highest value in an object.

// Method 1 :
let obj = {a:23,b:82,c:23,d:4};
let result_key = null;
let result_value = -Infinity;
for (let key in obj){
    if (obj[key]>result_value){
        result_key = key;
        result_value = obj[key];
    }
}
console.log(result_key);

// Method 2 :
let price = {a:23,b:82,c:23,d:4};
function max_key(obj){
    let maxEntry = Object.entries(obj).reduce((acc,val)=>{
        return val[1]>acc[1] ? val : acc;
    })
    return maxEntry[0];
}
console.log(max_key(price));