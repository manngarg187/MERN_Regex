// 37. Fibonacci series up to N terms
// Input: n = 10

// The Fibonacci series is an infinite sequence of numbers, starting with 0 and 1, where each subsequent number is the sum of the two preceding ones: 0,1,1,2,3,5,8,13...


// let n=10;

// let a1 = 0;
// let a2 = 1;

// for (let i=0; i<=n; i++){
//     if (i===0){
//         console.log(a1);
//     }else if (i===1){
//         console.log(a2);
//     }else{
//         // console.log(a1+a2); --> Attempt 1 Wrong
//         // a1 = a2;
//         // a2 = i;

//         // console.log(a1+a2); --> Attempt 2 also Wrong - Fibonacci depends on previous two numbers But you're using loop index (i), which is unrelated
//         // a1 = a1 + a2;
//         // a2 = a2 + i;
//     }
// }

// ----    -----     -------    -------

// Now the right answer is :
let n=10;
if (n===0){
    console.log(0);
    return;
}
if (n===1){
    console.log(0);
    console.log(1);
    return;
}
let a1=0;
let a2=1;
console.log(a1);
console.log(a2);
 // for (let i=2; i<=n; i++){    --> this prints n+1 terms in total including our n0 & n1;
for (let i=2; i<n; i++){
    let temp=a1+a2;
    a1=a2;
    a2=temp;
    console.log(temp);
}
