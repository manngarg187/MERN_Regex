// 20. Count vowels in each word of an array using objects

let words = ["apple", "banana", "sky"];
let result = words.reduce((acc,val)=>{
    let vow_count = val.split("").reduce((acc_2,val_2) => {
        if (val_2 === "a" || val_2 === "e" || val_2 === "i" || val_2==="o" || val_2 === "u"){
            acc_2+=1;
        }
        return acc_2;
    },0)
    acc[val] = vow_count;
    return acc;
},{})
console.log(result);