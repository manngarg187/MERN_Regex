// 35. GCD of two numbers (loop method)
// Input: a = 12, b = 18

let a=12;
let b=18;
// let c;
// if (a<=b){
//     c=a;
// }else{
//     c=b;
// }

let c = Math.min(a,b);
let gcd=1;

for (let i=1; i<=c; i++){
    if ((a%i===0) && (b%i===0) && (i>gcd)){
        gcd = i;
    }
}
console.log(gcd);
