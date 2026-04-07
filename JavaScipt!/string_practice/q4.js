// 47. Check whether "madam" is a palindrome using string methods.

let nums = "madam";
let rev = "";
for (let char of nums){
    rev = char + rev;
}
if (nums === rev){
    console.log("yes palindrome");
}else{
    console.log("sorry not a palindrome");
}