// 58. Remove all special characters from "@J!a#v$a%S^c&r*i(p)t".

let num = "@J!a#v$a%S^c&r*i(p)t";
let ans = "";

for (let hero of num){
    // if ((hero >= 'a' || hero <='z') || (hero>='A' || hero <='Z')){ --> Wrong!
    if ((hero >= 'a' && hero <='z') || (hero>='A' && hero <='Z')){
        ans = ans + hero;
    }
}
console.log(ans);