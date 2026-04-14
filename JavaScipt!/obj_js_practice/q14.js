// 14. Convert object values to uppercase.

let data = {a:"hello",b:"Fun",c:"pEace"};
function value_upper(obj){
    let result = Object.entries(obj).map((val)=>{
        return [val[0],val[1].toUpperCase()];
    })
    return Object.fromEntries(result);
}
console.log(value_upper(data));

// Ouput : { a: 'HELLO', b: 'FUN', c: 'PEACE' }