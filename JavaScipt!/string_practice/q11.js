// 54. Find the first non-repeating character in "aabbccddeffg".

let num = "aabbccddeffg"
let ans = "";
for (let i=0; i<num.length-1; i++){
    if (num[i]===num[i+1]){
        i++;
    }
    else{
        console.log(num[i]);
        break;
    }
}