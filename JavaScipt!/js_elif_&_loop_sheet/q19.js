// 19. Sum of digits
// Input: num = 456

let num=456;

let sum=0;

while (num>0){
    sum = sum + num%10;
    num = Math.floor(num/10);
}
console.log(sum);