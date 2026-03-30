// 43. Sum of factorial of digits
// Input: num = 145

let num=145;
let num1 = num;
let sum=0;

while (num1>0){
    let digit = num1%10;
    let fact=1
    for (let i=1; i<=digit; i++){
        fact=fact*i;
    }
    sum += fact;
    num1 = Math.floor(num1/10);
}

console.log(sum);