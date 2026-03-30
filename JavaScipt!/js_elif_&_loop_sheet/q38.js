// 38. Fibonacci numbers less than N
// Input: n = 50

let n=50;

if (n===0){
    // console.log(0);
    return;
}
if (n===1){
    console.log(0);
    // console.log(1);
    return;
}
let a1=0;
let a2=1;
console.log(a1);
console.log(a2);
let temp = a1+a2;

while (temp<n){
    console.log(temp);
    a1=a2;
    a2=temp;
    temp=a1 + a2;
}