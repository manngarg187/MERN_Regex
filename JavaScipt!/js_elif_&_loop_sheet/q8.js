// 8. Check alphabet, digit, or special character
// Input: char = "$"

const enter_char = "$";  

if ((enter_char>='a' && enter_char<='z') || (enter_char>='A' && enter_char<='Z')){
    console.log("alphabet");
} else if(enter_char>=0 && enter_char<=9){
    console.log("digit");
} else{
    console.log("special character");
}