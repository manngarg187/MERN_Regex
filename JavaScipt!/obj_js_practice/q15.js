// 15. Extract only string values from an object.

let data = {a:"hello",b:"Fun",k:23,c:"pEace",g:34};

function extract_str(obj){
    let result = Object.entries(obj).filter((val)=>{
        return typeof val[1] === "string";
    })
    return Object.fromEntries(result);
}
console.log(extract_str(data));