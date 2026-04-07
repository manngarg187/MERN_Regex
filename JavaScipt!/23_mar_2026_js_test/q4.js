// Question 4. Find second longest word in a sentence.
//             input: let str = "JavaScript is the most powerful language";

let str = "JavaScript is the most powerful language";
let xyz = str.split(" ");

let first = 0;
let second = 0;
let first_word = "";
let second_word = "";

for (let i = 0; i < xyz.length; i++) {
    let len = xyz[i].length;

    if (len > first) {
        second = first;
        second_word = first_word;

        first = len;
        first_word = xyz[i];
    } 
    else if (len > second && len < first) {
        second = len;
        second_word = xyz[i];
    }
}

console.log(second_word);