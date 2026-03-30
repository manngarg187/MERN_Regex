// 25. Print Armstrong numbers 1–500

for (let i = 1; i <= 500; i++) {
    let num = i;
    let num_1 = num;
    let num_2 = num;

    let count = 0;
    while (num_1 > 0) {
        count++;
        num_1 = Math.floor(num_1 / 10);
    }

    // console.log("No. of Digits : ", count);

    let sum = 0;
    while (num_2 > 0) {
        let digit = num_2 % 10;
        let cube = 1;
        for (let i = 0; i < count; i++) {
            cube = cube * digit;
        }
        sum = sum + cube;
        num_2 = Math.floor(num_2 / 10);
    }

    // console.log("Sum after n power : ", sum);

    if (i === sum) {
        console.log(i);
    }
}
