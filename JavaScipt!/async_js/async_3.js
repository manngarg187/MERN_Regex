

let p = new Promise((resolve, reject) => {
    reject("game changeres");
})

p.then(cool => console.log(cool))
.catch(bro => console.log("sorry hi good"))