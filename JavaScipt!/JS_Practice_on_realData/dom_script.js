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

let alpha = document.querySelector("h1")
let beta = document.querySelector("button");
let bro = document.querySelector("#uni")
beta.addEventListener("click",()=>{

    let result = db.products.filter(val=>val.rating>4.2)
    let final = result.map((val)=>{
        return `<tr>
        <td>${val.name}</td>
        <td>${val.brand}</td>
        <td>${val.price}</td>
        </tr>`
    })
    bro.innerHTML = final.join("");
    alpha.style.color = "green";
})