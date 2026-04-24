
let add = document.querySelector("#a1");
let subtract = document.querySelector("#a2")
let restart = document.querySelector("#a3")
let change = document.querySelector("h2")
let count = 0;

add.addEventListener("click",()=>{
    count++
    change.textContent = `${count}`
})

subtract.addEventListener("click",()=>{
    if (count == 0){
        return;
    }
    count--;
    change.textContent = `${count}`
})

restart.addEventListener("click",()=>{
    count = 0;
    change.textContent = count;
})
