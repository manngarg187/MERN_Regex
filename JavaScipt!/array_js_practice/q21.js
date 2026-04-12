// 21. Chunk an array into smaller arrays of given size.

let arr = [1,2,3,4,5,6,7];
let size = 3;

let result = arr.reduce((acc, val, i) => {
    if (i % size === 0) {
        acc.push([val]);        
    } else {
        acc[acc.length - 1].push(val); 
    }
    return acc;
}, []);

console.log(result);
