// 10. Create a deep copy of an object.

let data = {a:23,b:82,c:{kol:23,gam:"fun"},d:4};
let deep_copy = structuredClone(data);

data.c.kol = 72;
console.log(data, deep_copy);
