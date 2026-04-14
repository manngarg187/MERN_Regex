// 17. Flatten a nested object into a single-level object.

let user = {
  name: "Switch",
  address: {
    city: "Dehradun",
    location: {
      area: "Rajpur Road",
      pincode: 248001
    }
  },
  age: 15
};

function flatten(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    let newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] !== "object" || obj[key] === null) {
      result[newKey] = obj[key];
    } else {
      flatten(obj[key], newKey, result);
    }
  }
  return result;
}

console.log(flatten(user));

// Output :
// {
//   name: 'Switch',
//   'address.city': 'Dehradun',
//   'address.location.area': 'Rajpur Road',
//   'address.location.pincode': 248001,
//   age: 15
// }

