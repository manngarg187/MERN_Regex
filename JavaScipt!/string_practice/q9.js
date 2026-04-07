// 52. Find the longest word in "JavaScript makes web development powerful".

let num = "JavaScript makes web development powerful";
let ans = num.split(" ");
let maxl = 0;
let maxw = "";
for (let chick of ans){
    if (chick.length > maxl){
        maxl = chick.length;
        maxw = chick;
    }
}
console.log(maxl, maxw);