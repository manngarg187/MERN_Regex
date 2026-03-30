// 22. Smallest digit in number
// Input: num = 5832

let num=5832;

let num_p = Math.abs(num);
let smallest = Number.MAX_VALUE;

if (num===0){
    console.log(0);
    return;
}

while (num_p>0){
    if ((num_p%10) < smallest){
        smallest = num_p%10;
    }
    num_p = Math.floor(num_p/10);
}

console.log(smallest);