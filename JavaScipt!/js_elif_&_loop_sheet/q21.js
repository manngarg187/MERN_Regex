// 21. Largest digit in number
// Input: num = 5832

let num=5832;

let num_p = Math.abs(num);
let largest = -1;

if (num===0){
    console.log(0);
    return;
}

while (num_p>0){
    if ((num_p%10) > largest){
        largest = num_p%10;
    }
    num_p = Math.floor(num_p/10);
}

console.log(largest);