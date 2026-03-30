// 33. Print perfect numbers 1–1000

for (let j = 1; j <= 1000; j++) {
    let num = j;
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum = sum + i;
        }
    }
    if (sum === num) {
        console.log(j);
    }
}
