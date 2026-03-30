// 20. Product of digits
// Input: num = 234

let num=234;

if (num===0){
    console.log(0);
    return;
}

let product=1;

while (num>0){
    product = product * (num%10);
    num = Math.floor(num/10);
}
console.log(product);