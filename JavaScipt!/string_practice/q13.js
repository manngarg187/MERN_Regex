
// 56. Convert "2026-02-05" into "05/02/2026" using string methods.

let str = "2026-02-05";
let newly = str.split("-");
let ans = "";
// for (let hero of newly){
//     ans = hero + ans + "/"; 
// }
// wrong :
// Let’s see what happens step-by-step:

// First → "2026" → ans = "2026/"
// Second → "02" → ans = "02" + "2026/" + "/" = "022026//"
// Third → "05" → messy result 😵

// 👉 You’re adding / every time AND reversing incorrectly

for (let hero of newly){
    ans = hero + ans;
    ans = "/" + ans;
}
// console.log(ans.trimStart("/")); -> Mistake becoz:

// ❌ What you think it does:
// “Remove / from the start”
// ✅ What it actually does:
// “Remove whitespace only (spaces, tabs, etc.) from the start”

console.log(ans.slice(1));