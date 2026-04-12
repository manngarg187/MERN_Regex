// 2. Find the maximum number in an array without using Math.max().

let arr= [7,9,-2,88,345,9,77];
let max = Number.MIN_SAFE_INTEGER;

for (let hero of arr){
    if (hero>max){
        max = hero;
    }
}
console.log(max);
