// 16. Count digits in a number
// Input: num = 12345

// const num=12345;

// let count=0;

// while (num>0){
//     count++;
//     num/=10;
// }

let obj1={
    name: "abc",

}
let obj2={
    age:25,
    role:"student",
}

let obj3=Object.assign({},obj1,obj2)
let obj4=Object.assign(obj1,obj2)

console.log(obj3)
console.log(obj1)
console.log(obj4)