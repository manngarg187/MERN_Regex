
// 59. Check whether "abc123" is an alphanumeric string.

let num = "abc123";

let alpha = false;
let numeric = false;

for (let hero of num){
    if (hero>="a" && hero<="z"){
        alpha = true;
    }
    if (hero>="0" && hero<="9"){
        numeric = true;
    }
}

if (alpha && numeric){
    console.log("yes");
}else{
    console.log("no");
}