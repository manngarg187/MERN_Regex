// 27. Print prime numbers 1–100

for (let j = 1; j <= 100; j++) {
    let num = j;
    let sign = 0;

    if (num < 2) {
        sign = 1;
        continue;
    }

    // for (i=num-1; i>1; i++){    ---> by mistake I wrote i++ in my attempt-1

    for (let i = num - 1; i > 1; i--) {
        if (num % i === 0) {
            sign = 1;
            break;
        }
    }
    if (sign === 0){
        console.log(j);
    }
}
