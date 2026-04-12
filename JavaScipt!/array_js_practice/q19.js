// 19. Convert an array of objects into an object using reduce().

let arr=[{name:"Karl",age:43},{name:"Sam",age:21},{name:"Reena",age:62}];
let result = arr.reduce((acc, curr,index) => {
    acc[index] = curr;
    return acc;
}, {});

console.log(result);