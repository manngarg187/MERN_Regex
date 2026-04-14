// 12. Freeze an object and try modifying it.
let obj = {
  name: "Mann",
  age: 21
};

Object.freeze(obj);

obj.name = "Garg";   
obj.city = "Delhi";   
delete obj.age;        

console.log(obj);
// output : { name: 'Mann', age: 21 } - Nothing changes