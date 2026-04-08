// 57. Mask the last 4 digits of "1234567812345678" as "************5678".

let num = "1234567812345678";
let target = "************5678";
let ans = "";

for (let i=1; i<=num.length-4; i++){
    ans = ans+"*";
}
ans = ans + num.slice(-4);
if (ans === target) {
    console.log(ans);
}
