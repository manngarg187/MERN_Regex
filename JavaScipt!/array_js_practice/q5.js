// 5. Check if at least one number in an array is negative.

let arr = [4,-9,8,9,2,8];
let result = arr.some((val)=>{
    return (val<0);
})
console.log(result);