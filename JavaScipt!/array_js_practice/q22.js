// 22. Remove an element at a specific index without mutating the array.

let arr = [1,2,3,4,5,6,7];
let target = 3;

let result = arr.filter((val,index,self)=>{
    // return (self.index != target); -> Mistake
    // return (self[index] != target); -> Again a Mistake
    return index != target;
})
console.log(result);