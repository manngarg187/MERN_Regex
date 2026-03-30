// 18. Check palindrome number
// Input: num = 121

let num = 121;
let num_copy = num;
let rev =0; 

while (num>0){
    rev = rev*10 + num%10;
    num = Math.floor(num/10);
}

if (num_copy === rev){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome");
}