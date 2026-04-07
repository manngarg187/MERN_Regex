function abc(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("hello ");
        }, 2000);
    })
}

async function fetchResult(){
    let result = await abc()
    console.log(result);
}

fetchResult()