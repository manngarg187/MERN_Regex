// 45. Check if number is power of 2 (using loop)
// Input: num = 32

let num=32;

if (num===1){
    console.log("yes!");
    return;
}

while (num>1){
    if (num%2!==0){
        console.log("no")
        return;
    }else{
        num = Math.floor(num/2);
    }
}
console.log("yes!")