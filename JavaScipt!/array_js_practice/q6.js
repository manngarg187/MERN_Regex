// 6. Check if all elements in an array are numbers.

arr = [2,3,-8,0,8];
result = arr.every((val)=>{
    // return typeof val == "number";
    return typeof val === "number";
});
return result;