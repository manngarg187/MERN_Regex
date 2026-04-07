// 48. Reverse the string "Hello" using string methods.

let str = "Hello";
let rev = "";
for (let char of str){
    rev = char + rev;
}
console.log(rev);