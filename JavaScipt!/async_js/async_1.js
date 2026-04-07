
async function abc() {
    let result = await fetch('https://jsonplaceholder.typicode.com/todos');
    let finalResult = await result.json();
    console.log(result);
}

abc();


