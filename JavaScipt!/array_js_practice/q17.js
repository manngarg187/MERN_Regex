// 17. Return only unique values using filter().

let arr = [1, 2, 2, 3, 4, 4, 5];
let result = arr.filter((val, index, self) => {
    return self.indexOf(val) === index;
});
console.log(result);