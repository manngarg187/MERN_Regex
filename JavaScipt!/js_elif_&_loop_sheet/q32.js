// 32. Check perfect number
// Input: num = 28

// A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself). For example, 6 is a perfect number because its divisors (1, 2, 3) sum to 6. Only 52 perfect numbers are known, with the first four being 6, 28, 496, and 8128. 

let num=496;
let sum=0;

for (let i=1; i<num; i++){
    if (num%i===0){
        sum = sum + i;
    }
}
if (sum===num){
    console.log("It's a Perfect Number.");
} else{
    console.log("Sorry! not perfect.")
}