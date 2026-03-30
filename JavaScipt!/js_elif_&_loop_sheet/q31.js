// 31. Print all factors
// Input: num = 36

let num=36;

for (let i=1; i<=num; i++){
    if (num%i==0){
        console.log(i);
    }
}