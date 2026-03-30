// 29. Sum of odd numbers 1–N
// Input: n = 15

let n=15;
let sum=0;

for (let i=1; i<=n; i++){
    if (i%2!==0){
        sum=sum+i;
    }
}
console.log(sum);