
let b= 10
let a = setInterval(() => {
    console.log(`47:${b--}`)
    if (b===-1){
    clearInterval(a);
}
}, 1000);


