console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

Promise.resolve().then(() => console.log("4"));

setTimeout(() => console.log("298"), 0);

console.log("5");

// Output order :
// 1 - sync
// 5 - sync
// 3 - micro
// 4 - micro
// 2 - macro
// 298 - macro