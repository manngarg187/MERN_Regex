// 23. Count even and odd digits
// Input: num = 123456

let num=123456;

let even=0;
let odd=0;

while (num>0){
    let check = num%10;
    if (check%2===0){
        even++;
    }else{
        odd++;
    }
    num = Math.floor(num/10);
}

console.log(even);
console.log(odd);