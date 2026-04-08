
// 60. Find the most frequent character in "mississippi".

let num = "mississippi";
let max = 0;
let max_char = "";

while (num.length>0){
    let single = num[0];
    let pre_length = num.length;
    num = num.replaceAll(single,"");
    // let single_len = num - pre_length;
    // let single_len = num.length - pre_length;
    let single_len = pre_length - num.length;
    if (single_len>max){
        max = single_len;
        max_char = single;
    }
}
console.log(max_char, max);