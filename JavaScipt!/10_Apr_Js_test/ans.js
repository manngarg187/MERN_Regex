
// Q1 : remove space in a string

// let str = "I am learning JS"
// console.log(str.replaceAll(" ",""));


// Q2 : to check the frequecy of letters in a string

// let str = "I am learning JS";
// let arr = str.split("");
// let arr2 = arr.toSorted();

// console.log(arr, arr2);
// for (let i=0; i<arr2.length; i++){
//     let letter = arr2[i];
//     let count = 1;
//     while (arr2[i]===arr2[i+1]){
//         count++;
//         i++;
//     }
//     console.log(letter, count);
// }

// Q3 : move all zeros to the end

// let arr = [0,1,0,2,0,3,0,5];
// let arr2 = arr.toSorted((a,b)=> b-a);
// console.log(arr2);

// Q4 : remove the falsy values from the object

let obj = {a:0 , b: 5, c: false, d: "3", e: undefined};
let arr = Object.entries(obj);
for (let each of arr){
    if (each[1] == false){
        let k = each[0];
        delete obj[each[0]];
    }
}
console.log(obj);

// Q5 : fetch a api and show its result on the browser

// Q6 : create a form & add submit functionality!
