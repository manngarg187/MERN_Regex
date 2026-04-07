// 53. Convert "hello world" into "Hello World" (title case).

let str = "hello world";
let ans = str.split(" ");
let final = "";
// for (let chick in ans){ -> 'for in' gives us indexes!
for (let chick of ans){
    final += chick[0].toUpperCase() + chick.slice(1);
    final += " ";
}
console.log(final.trimEnd(" "), typeof final);