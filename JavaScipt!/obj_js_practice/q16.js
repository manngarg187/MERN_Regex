// 16. Create nested objects and access deep values.

let user = {
  name: "Switch",
  address: {
    city: "Dehradun",
    location: {
      area: "Rajpur Road",
      pincode: 248001
    }
  }
};

console.log(user.address.location.area);