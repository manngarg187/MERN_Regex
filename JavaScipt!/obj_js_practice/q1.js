// 1. Write a function that counts how many times each character appears in a string using an object.

// Method 1 :
// let str = "I am learning mern stack. By now we have completed javascript";
// let obj = {};
// let str1 = str.replaceAll(" ", "");
// let str2 = str1.replaceAll(".", "");
// let arr = str2.split("");

// function counter(abc) {
//     let result = arr.forEach((val) => {
//         obj[val] = 0;
//     })
//     let result_2 = arr.forEach((val) => {
//         obj[val] = obj[val] + 1;
//     })
//     console.log(obj);
// }
// counter(arr);

// Method 2 :
function countChars(str) {
  let freq = {};

  for (let char of str) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  return freq;
}

console.log(countChars("hello"));
