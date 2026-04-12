// 26. Count total price from a cart array using reduce().

let cart = [
    { name: "Shirt", price: 500 },
    { name: "Jeans", price: 1200 },
    { name: "Shoes", price: 2000 }
];
let result = cart.reduce((acc,val)=>{
    return acc + val.price;
},0)
console.log(result);