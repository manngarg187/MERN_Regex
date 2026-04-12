
// 4. Count how many times each element appears in an array.

// solving a little modified version of above question!
let arr = "I love javascript and nodejs";
let arr_1 = arr.replaceAll(" ","");
// let arr_2 = arr_1.split(); -> Mistake!
let arr_2 = arr_1.split("");


let result = arr_2.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(result);


// let arr = [10,20,30,40];
// let result = arr.reduce((acc,val)=>acc+val,50);
// console.log(result);
