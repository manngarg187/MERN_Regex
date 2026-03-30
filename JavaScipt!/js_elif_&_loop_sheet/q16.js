// 16. Count digits in a number
// Input: num = 12345

let num=12345;

let count=0;


if (num===0){
    console.log(1);
    return;
}

while (num>0){
    count = count + 1;
    // num = num/10; -> Wrong
    num = Math.floor(num/10);
}
console.log(count);

