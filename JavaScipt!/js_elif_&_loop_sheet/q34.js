// 34. Power of number (without Math.pow)
// Input: base = 3, exp = 4

let base=3;
let exp=4;

let ans=1;

for (let i=0; i<exp; i++){
    ans=ans*base;
}
console.log(ans);