// Question 2. Move all zeros to end.
//             input: let arr = [0,10,0,6,7,8,0,5]

let arr = [0,10,0,6,7,8,0,5]
// let arr1 = arr.toSorted();  -> My Mistake : .toSorted will give [0,0,0,10,5,6,7,8] -> because this will sort as strings
arr1 = arr.toSorted((a,b) => a-b);
let arr2 = [];
for (let i=arr.length-1; i>=0; i--){
    arr2.push(arr1[i]);
}
console.log(arr2);


// Method 2 (without the need of loop)

// let arr = [0,10,0,6,7,8,0,5];
// let result = arr.toSorted((a, b) => b - a);
// console.log(result);