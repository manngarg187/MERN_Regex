// 11. Merge two objects but overwrite only common keys.

let data1 = {a:5,sam:"game",c:undefined,koo:null,e:"game",f:null,support:332};
let data2 = {a:5,unity:24,c:undefined,koo:null,e:"done"};

let result = {...data1, ...data2};
console.log(result);