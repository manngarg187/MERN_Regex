// 16. Sort an array of objects by age property.

let arr=[{name:"Karl",age:43},{name:"Sam",age:21},{name:"Reena",age:62}];
let result = arr.toSorted((a,b)=>a.age-b.age);
console.log(result);