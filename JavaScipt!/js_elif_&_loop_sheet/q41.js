// 41. Automorphic number check
// Input: num = 25

// An automorphic number (or circular number) is a natural number whose square ends in the same digits as the number itself.
// Common Examples: 5, 6, 25, 76, 376, 625, 9376, 90625.
// 76^2 = 5776

let num = 76;
let num1 = num;
let sq = num*num;

while (num1>0){
    // if (!((num%10===0) && (sq%10===0))){ --> Blunder : I was checking that last dighit of num & sq are zero or not...
    if (!((num%10) === (sq%10))){
        console.log("Sorry, not automorphic");
        return;
    }
    num1 = Math.floor(num1/10);
}
console.log("Yes! Automorphic!");
