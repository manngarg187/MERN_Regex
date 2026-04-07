// 51. Remove duplicate characters from "programming" using string methods.

// let num = "programming";
// let new_ans = "";
// let index = 0;
// while (num.length != 0){
//     new_ans += num[index];
//     num.replace(num[index],""); //-> WRONG answer -> becoz this does not modify the orignial num!
//     index++;
// }
// console.log(new_ans);

// CORRECT APPROACH :
let num = "programming";
let new_ans = "";
for (let i=0; i<num.length; i++){
    if (!(new_ans.includes(num[i]))){
        new_ans += num[i];
    }
}
console.log(new_ans);


