const db = {

  users: [
    {
      userId: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "customer",
      address: {
        city: "Delhi",
        state: "Delhi",
        country: "India",
        pincode: 110001
      },
      cart: [
        { productId: 1, quantity: 1 },
        { productId: 4, quantity: 2 }
      ],
      wishlist: [2, 3],
      orders: ["ORD1001", "ORD1002"]
    },

    {
      userId: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      role: "customer",
      address: {
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        pincode: 400001
      },
      cart: [
        { productId: 2, quantity: 1 }
      ],
      wishlist: [1],
      orders: ["ORD1003"]
    }
  ],

  categories: [
    {
      categoryId: 1,
      name: "Electronics",
      parentCategory: null
    },
    {
      categoryId: 2,
      name: "Accessories",
      parentCategory: 1
    },
    {
      categoryId: 3,
      name: "Furniture",
      parentCategory: null
    }
  ],

  vendors: [
    {
      vendorId: 1,
      name: "TechWorld",
      rating: 4.5,
      location: "Bangalore"
    },
    {
      vendorId: 2,
      name: "HomeStore",
      rating: 4.2,
      location: "Jaipur"
    }
  ],

  products: [
    {
      productId: 1,
      name: "Laptop",
      price: 65000,
      brand: "Dell",
      categoryId: 1,
      vendorId: 1,
      stock: 10,
      specifications: {
        ram: "16GB",
        storage: "512GB SSD",
        processor: "Intel i7"
      },
      rating: 4.6
    },

    {
      productId: 2,
      name: "Smartphone",
      price: 30000,
      brand: "Samsung",
      categoryId: 1,
      vendorId: 1,
      stock: 20,
      specifications: {
        ram: "8GB",
        storage: "128GB",
        battery: "5000mAh"
      },
      rating: 4.4
    },

    {
      productId: 3,
      name: "Headphones",
      price: 5000,
      brand: "Sony",
      categoryId: 2,
      vendorId: 1,
      stock: 15,
      specifications: {
        type: "Wireless",
        noiseCancellation: true
      },
      rating: 4.5
    },

    {
      productId: 4,
      name: "Office Chair",
      price: 12000,
      brand: "GreenSoul",
      categoryId: 3,
      vendorId: 2,
      stock: 8,
      specifications: {
        material: "Mesh",
        adjustableHeight: true
      },
      rating: 4.2
    }
  ],

  orders: [
    {
      orderId: "ORD1001",
      userId: 1,
      orderDate: "2026-03-01",
      items: [
        { productId: 1, quantity: 1 },
        { productId: 3, quantity: 2 }
      ],
      payment: {
        method: "UPI",
        status: "Paid"
      },
      delivery: {
        status: "Delivered",
        date: "2026-03-05"
      },
      coupon: "DISC10"
    },

    {
      orderId: "ORD1002",
      userId: 1,
      orderDate: "2026-03-07",
      items: [
        { productId: 4, quantity: 1 }
      ],
      payment: {
        method: "Credit Card",
        status: "Paid"
      },
      delivery: {
        status: "Shipped",
        expected: "2026-03-12"
      }
    },

    {
      orderId: "ORD1003",
      userId: 2,
      orderDate: "2026-03-08",
      items: [
        { productId: 2, quantity: 1 }
      ],
      payment: {
        method: "COD",
        status: "Pending"
      },
      delivery: {
        status: "Processing"
      }
    }
  ],

  reviews: [
    {
      reviewId: 1,
      userId: 1,
      productId: 1,
      rating: 5,
      comment: "Excellent laptop",
      date: "2026-03-06"
    },
    {
      reviewId: 2,
      userId: 2,
      productId: 2,
      rating: 4,
      comment: "Good phone",
      date: "2026-03-09"
    }
  ],

  coupons: [
    {
      code: "DISC10",
      discount: 10,
      type: "percentage",
      expiry: "2026-12-31"
    }
  ],

  inventory: [
    {
      productId: 1,
      warehouse: "Delhi",
      stock: 10
    },
    {
      productId: 2,
      warehouse: "Mumbai",
      stock: 20
    },
    {
      productId: 3,
      warehouse: "Bangalore",
      stock: 15
    },
    {
      productId: 4,
      warehouse: "Jaipur",
      stock: 8
    }
  ]

};

// Question 1: Get all users' names.
// let all_names = db.users.map(val=>val.name);
// console.log(all_names);

// Question 2: Find user with userId = 1.
// let user_1 = db.users.find(val=>val["userId"]===1);
// console.log(user_1);

// Question 3: Get all products with price greater than 10,000.
// // Method 1 : reduce + push -Works but not ideal
// let prod = db.products.reduce((acc,val)=>{
//   if (val.price > 10000){
//     acc.push(val.name);
//   }
//   return acc;
// },[])
// console.log(prod);

// // Method 2 : (Ideal)
// let prod = db.products.filter(val => val.price > 10000)
// let product_names = prod.map(val => val.name);
// console.log(product_names);

// Question 4 : List all categories names.

// Method 1 : Works but unnecessary reduce
// let all_cat = db.categories.reduce((acc,val)=>{
//   acc.push(val.name);
//   return acc;
// },[])
// console.log(all_cat);

// // Method 2 : (better & simple)
// let result = db.categories.map(val=>val.name);
// console.log(result)

// Question 5: Find all vendors with rating above 4.3.
// let high_rate = db.vendors.filter(val => val.rating > 4.3);
// console.log(high_rate);

// Question 6: Get all products with stock less than 10.
// let all_products = db.products.filter(val => val.stock <10);
// console.log(all_products);

// Question 7 : Find all users from "Delhi".
// let place_delhi = db.users.filter(val => val.address.city === "Delhi");
// console.log(place_delhi);

// Question 8: Get all orders with status "Delivered".
// let success_order = db.orders.filter(val=>val.delivery.status === "Delivered");
// console.log(success_order);

// Question 9: Count total number of products.
// let total_products = db.products.length;
// console.log(total_products);

// Question 10: Get all wishlist products of user 1.
// let find_user = db.users.find(val => val.userId===1);
// let result = find_user.wishlist.map(val => {
//   let product_find = db.products.find(val2 => val===val2.productId)
//   return product_find;
// })
// console.log(result);

// Question 11: Get total cart value of user 1.
// Method 1:
// let user = db.users.find(hero=>hero.userId===1);
// let amt = user.cart.map( val1 => {
//   let product_select = db.products.find((val2) => {
//     return val2.productId === val1.productId;
//   })
//   return (product_select.price)*(val1.quantity);
// })

// let total_amt = amt.reduce((acc,val)=>acc+val);
// console.log(total_amt);

// // Method 2:
// let user_select = db.users.find(hero=>hero.userId===1);
// let result = user_select.cart.reduce((acc,val1)=>{
//   product_select = db.products.find(val2 => {
//     return val2.productId === val1.productId;
//   })
//   return acc + (product_select.price*val1.quantity);
// },0)
// console.log(result);


// Question 12 : Find all products in "Electronics" category.
// let product_select = db.products.filter((val1) => {
//   let category_select = db.categories.find(val2=>{
//     return val2.name === "Electronics";
//   })
//   if (val1.categoryId === category_select.categoryId){
//     return val1;
//   }
// })
// let result = product_select.map(val=>val.name);
// console.log(result);


// Question 13: Get vendor name for each product.
// let result = db.products.map((val)=>{
//   let vend = db.vendors.find(val2=>val.vendorId === val2.vendorId);
//   return [val.name, vend.name];
// })
// console.log(result);

// Question 14: Find total number of orders per user.
// let result = db.users.map(val => [`UserId : ${val.userId}`,val.name,val.orders.length]);
// console.log(result);

// Quetion 15: Get all products with rating above 4.5.
// let result = db.products.filter(val=>val.rating>4.5);
// console.log(result);

// Question 16: Find all orders where payment method is "UPI".
// let result = db.orders.filter(val => val.payment.method === "UPI");
// console.log(result);

// Question 17: Get all items from order "ORD1001".
// let find_order = db.orders.find(val => val.orderId==="ORD1001");
// let result = find_order.items.map(val => {
//   let product_find = db.products.find(val2=>val2.productId===val.productId);
//   return [product_find.productId,product_find.name];
// })
// console.log(result);

// Question 18: Find products that are out of stock.
// let result = db.products.filter(val => val.stock===0)
// console.log(result);

// Quetion 19: Get all reviews for productId = 1.
// let result = db.reviews.filter(val => val.productId ===1);
// console.log(result);

// Question 20: Find average rating of all products.
// let total_rating = db.products.reduce((acc,val)=>{
//   return acc+val.rating;
// },0)
// let total_products = db.products.length;
// console.log((total_rating/total_products).toFixed(1));

// Question 21: Calculate total revenue generated from all orders.
// let total_rev = db.orders.reduce((acc1,val1)=>{
//   let sub_rev = val1.items.reduce((acc2,val2)=>{
//     let find_product = db.products.find(val3=>val2.productId===val3.productId)
//     // return acc2+find_product.price; -> Silly Mistake
//     return acc2 + find_product.price*val2.quantity;
//   },0)
//   return acc1+sub_rev;
// },0)
// console.log(total_rev);

// Question 22 : Get most expensive product

// // Method 1 :
// let pro_select = db.products.reduce((acc,val)=>{
//   if (val.price > acc[1]){
//     acc[0] = val.name;
//     acc[1] = val.price;
//   }
//   return acc;
// },["max",0])
// console.log(pro_select);

// // Method 2:
// let pro_select = db.products.reduce((acc, val) => {
//   if (val.price > acc.price) {
//     return { name: val.name, price: val.price };
//   }
//   return acc;
// }, { name: "", price: 0 });

// console.log(pro_select);

// // Method 3:
// let maxProduct = db.products.reduce((a, b) =>
//   a.price > b.price ? a : b
// );
// console.log(maxProduct.name);

// Question 23: Find most sold product (based on order quantity).

// My Wrong Attempt (Don't look into it... its very confusing and wrong)
// let select = db.orders.reduce((acc1,val1)=>{
//   let select2 = val1.items.reduce((acc2,val2)=>{
//     if (!(val2.productId in acc1)){
//       acc1[val2.productId] = val2.quantity;
//     }else{
//       acc1[val2.productId]+=val2.quantity;
//     }
//     return acc2;
//   })
//   return acc1;
// },{});
// console.log(select);

// Correct Answer:
// let productCount = db.orders.reduce((acc, order) => {
//   order.items.forEach(item => {
//     if (!(item.productId in acc)) {
//       acc[item.productId] = item.quantity;
//     } else {
//       acc[item.productId] += item.quantity;
//     }
//   });
//   return acc;
// }, {});
// console.log(productCount);

// let maxProductId = Object.keys(productCount).reduce((a, b) =>
//   productCount[a] > productCount[b] ? a : b
// );

// let product = db.products.find(p => p.productId == maxProductId);

// console.log(product.name);

// Question 24: Get user who placed the highest number of orders.

// Method 1 (my solution):
// let high_ord = db.users.reduce((acc,val)=>{
//   if (val.orders.length>acc.num_order){
//     // acc[val.userId] = val.userId; ->Blunder
//     acc.userId = val.userId; 
//     // acc[val.num_order] = val.orders.length; ->Bluder
//     acc.num_order = val.orders.length;
//   }
//   return acc;
// },{userId:0,num_order:0})

// let user_ans = db.users.find(val=>val.userId===high_ord.userId);
// console.log(user_ans.name);

// // Method 2 :
// let user = db.users.reduce((acc, val) =>
//   val.orders.length > acc.orders.length ? val : acc
// );

// console.log(user.name);

// Ans 25: Find total quantity sold per product.
// let productCount = db.orders.reduce((acc, order) => {
//   order.items.forEach(item => {
//     if (!(item.productId in acc)) {
//       acc[item.productId] = item.quantity;
//     } else {
//       acc[item.productId] += item.quantity;
//     }
//   });
//   return acc;
// }, {});
// console.log(productCount);

// let byProductName = Object.keys(productCount).map(val1=>{
//   // let find_name = db.products.find(val2 => val2.productId===val1); ->> Silly Mistake
//   let find_name = db.products.find(val2 => val2.productId===Number(val1));
//   // return [find_name.name,productCount[val1]];
//   return [find_name.name,productCount[val1]];
// })
// console.log(byProductName);

// Ans 26: Get top-rated product.
// let result = db.products.reduce((acc,val)=>{
//   return val.rating > acc.rating ? val : acc;
// })
// console.log(result.name);

// Ans 27 : Find all products with no reviews.

// Wrong attempt (it is giving right answer but its a wrong approch)
// let result = db.products.filter(val=>{
//   // let check = db.reviews.some(val2=>val2.productId === val.productId)
//   // if (!check) return val; -> Mistake becoz filter doesn't anything
// })
// let final = result.map(val=>val.name);
// console.log(final);

// Correct Approach :
// let result = db.products.filter(val=>{
//   return !db.reviews.some(val2=>val2.productId === val.productId)
// })
// let final = result.map(val=>val.name);
// console.log(final);

// Ans 28: Get all users who used a coupon.
// let result = db.users.filter((val1)=>{
//   return db.orders.some(val2 => {
//     // return val2.userId===val1.userId; -> Silly Mistake becoz I missed 1 imp condition!
//     return val2.userId===val1.userId && val2.coupon;
//   })
// })
// let final = result.map(val=>val.name);
// console.log(final)

// Ans 29: Find total discount applied using coupons.

// let result = db.orders.filter(val => val.coupon);
// console.log(result);
// let final = result.reduce((acc1, val1) => {
//   let final2 = val1.items.reduce((acc2, val2) => {
//     let product_price = db.products.find((val3) => {
//       return val3.productId === val2.productId;
//     })
//     return acc2 + product_price.price * val2.quantity;
//   }, 0)
//   let discount_percent = db.coupons.find((val4) => {
//     return val4.code === val1.coupon;
//   })
//   return acc1 + final2 * discount_percent.discount / 100;
// }, 0)
// console.log(final);

// Ans 30: Get orders that are still pending delivery.

// let result = db.orders.filter(val => val.payment.status==="Pending");
// console.log(result.map(val=>val.orderId));



// Question 31: // find the name of all products present in user1's cart:

// // MY Answer : 
// let step_1 = db.users; 
// let step_2 = step_1[0].cart;
// let check_1 = db.products;
// let ans = [];

// for (let hero of step_2) {
//     for (let j = 0; j < check_1.length; j++) {
//         if (hero.productId === check_1[j].productId) {
//             ans.push(check_1[j].name);
//         }
//     }
// }
// console.log(ans);


// // Solution given by Sir : 
// let user = db.users.find(hero => hero.userId === 1);
// let products = user.cart.map( table => {
//   let pro_in = db.products.find((chair)=> chair.productId === table.productId)
//   return pro_in.name;
// })
// console.log(products);



// Question 32 : find the total stock

// let total_stock = db.inventory.reduce((acc,val)=>{
//   acc["Total_stock"] = acc["Total_stock"] + val.stock;
//   return acc;
// },{Total_stock:0})

// console.log(total_stock);




