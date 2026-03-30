// 30. Count factors of a number
// Input: num = 12

let num=12;
let count=0;

for (let i=12; i>0; i--){
    if (num%i==0){
        count++;
    }
}
console.log(count);