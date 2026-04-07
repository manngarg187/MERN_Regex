// 55. Count the number of words in " I love JavaScript " after removing extra spaces.

let num = " I love JavaScript ";
// let newly = num.replace(" ",""); - My Mistake 
let newly = num.replaceAll(" ",""); 
console.log(newly, newly.length);