// 26. Check prime number
// Input: num = 29

let num=29;

if (num<2){
    console.log("not prime");
    return;
}

// for (i=num-1; i>1; i++){    ---> by mistake I wrote i++ in my attempt-1
for (i=num-1; i>1; i--){ 
    if (num%i === 0){
        console.log("not prime");
        return;
    }
}
console.log("Yes, Prime!")