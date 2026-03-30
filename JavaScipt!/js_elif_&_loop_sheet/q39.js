// 39. Strong number check
// Input: num = 145

// A strong number (or Krishnamurthi number/Peterson Number) is a special number where the sum of the factorials of its digits equals the original number, such as. Common examples include 1, 2, 145, and 40,585.

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

if (num===sum){
    console.log("Yes! Strong!");
}else{
    console.log("Nopes! not strong!");
}