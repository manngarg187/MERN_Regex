// Question 1. Group object by property age.
//             input: let arr=[
//                             { name:"amit",age:25 },
//                             { name:"ashvin",age:22 },
//                             { name:"anit",age:25 }
//                            ]

//              output: {
//                       25:[
//                           { name:"amit",age:25 },
//                           { name:"anit",age:25 } 
//                          ],
//                       22:[
//                           { name:"ashvin",age:22 },
//                          ]
//                       }

// My Exam Code :
// let arr = [
//     { name: "amit", age: 25 },
//     { name: "ashvin", age: 22 },
//     { name: "anit", age: 25 }
// ]
// let obj={};
// for (let i=0; i<arr.length; i++){
//     // obj.(arr[i].age) = []; -> brackets won't come here outside arr[i].age
//     obj.arr[i].age = [];
// }
// for (let i=0; i<arr.length; i++){
//     // obj.(arr[i].age).append(arr[i]); -> brackets won't come here outside arr[i].age
//     obj.arr[i].age.append(arr[i]);
// }
// console.log(obj);

// 🔴 Issue 1: Wrong object access
// obj.arr[i].age ❌

// 👉 This means:

// (obj.arr)[i].age

// But obj.arr does not exist

// 🔴 Issue 2: Dynamic keys syntax

// You need:

// obj[arr[i].age] ✅

// 👉 Because:

// age is dynamic value (25, 22, etc.)
// So we use bracket notation
// 🔴 Issue 3: .append() is not JS
// .append() ❌
// .push()   ✅

let arr = [
    { name: "amit", age: 25 },
    { name: "ashvin", age: 22 },
    { name: "anit", age: 25 }
];

let obj = {};

for (let i = 0; i < arr.length; i++) {
    let age = arr[i].age;

    if (!obj[age]) {
        obj[age] = [];
    }

    obj[age].push(arr[i]);
}

console.log(obj);