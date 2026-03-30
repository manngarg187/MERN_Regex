// 28. Sum of even numbers 1–N
// Input: n = 20

let n=20;
let sum=0;

for (let i=1; i<=n; i++){
    if (i%2===0){
        sum = sum+i;
    }
}
console.log(sum);