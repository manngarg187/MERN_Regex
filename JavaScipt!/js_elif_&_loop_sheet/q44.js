// 44. Check if number is perfect square
// Input: num = 49

// Method-1 :

// let num=49;
// let root = Math.sqrt(num);

// if (Number.isInteger(root)){
//     console.log("yes... perfect");
// }else{
//     console.log("no... not perfect");
// }

// Method 2 :

let num=49;
// for (let i=0; i<=num; i++){ --> useless checks - waste of compute power
for (let i=0; i*i<=num; i++){
    if (i*i === num){
        console.log("yes... is perfect");
        return;
    }
}
console.log("sorry... not perfect");