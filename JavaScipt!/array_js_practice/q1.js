// 1. Remove duplicate values from an array using array methods.

let arr = [3,7,8,3,3,9,7,10];
let ans = [];
let arr_sort = arr.toSorted((a,b)=>a-b);
for (let i=0; i<arr.length; i++){
    let single = arr_sort[i];
    while (arr_sort[i+1] === single) i++;
    ans.push(single);
}
console.log(ans);
