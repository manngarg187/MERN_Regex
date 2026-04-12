// 14. Remove falsy values (false, 0, "", null, undefined, NaN) from an array.

let arr = [0, 1, false, 2, "", 3, null, undefined, NaN];
let result = arr.filter((val) => {
    if (val) return true;
    else return false;
});
console.log(result);
