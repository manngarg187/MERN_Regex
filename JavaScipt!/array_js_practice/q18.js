// 18. Find the longest string in an array.

let arr = ["beta","gamma","sunflower","two"];
let result = arr.reduce((acc,val)=>{
    if (acc.length < val.length) return val;
    else return acc;  // -> I forgot this line! it is also imp!
},"")
console.log(result);