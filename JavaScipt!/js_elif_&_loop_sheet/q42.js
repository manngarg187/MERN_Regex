// 42. Count occurrences of a digit
// Input: num = 122333, digit = 3

let num = 122333;
const digit = 3;
let count = 0;

while (num>0){
    if (num%10 === digit){
        count++;
    }
    num = Math.floor(num/10);
}
console.log(count);