// 19. Group array elements by a property using an object.

let users = [
  { name: "Mann", role: "admin" },
  { name: "Rahul", role: "user" },
  { name: "Amit", role: "admin" }
];

let result = users.reduce((acc,val)=>{
    // if (!(acc[val.role] in acc)){ -> Silly Mistake:  in operator expects a property name (string), not a value.
    if (!(val.role in acc)){
        acc[val.role] = [val];
    }else{
        acc[val.role].push(val);
    }
    return acc;
    //Earlier I forgot to write "return acc;" inside reduce
},{})
console.log(result);

// Output :
// {
//   admin: [ { name: 'Mann', role: 'admin' }, { name: 'Amit', role: 'admin' } ],
//   user: [ { name: 'Rahul', role: 'user' } ]
// }