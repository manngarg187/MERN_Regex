// 36. LCM of two numbers (loop method)
// Input: a = 4, b = 6

let a=4;
let b=12;
let c= a*b;
// let lcm=1; --> Wrong : We need to find gcd in the following case!
let gcd = 1;
let d = Math.min(a,b);

for (let i=2; i<=d; i++){
    // if (d%i===0){
    //     lcm=i; -- > Wrong!
    //     break;
    // }
    if (a%i===0 && b%i===0){
        gcd=i;
    }
}

console.log(c/gcd);