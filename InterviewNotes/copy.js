let arr = [1,2,3,4,5,6,7]

let arr2 = arr

console.log(arr)
console.log(arr2)
arr2[0] = "updated"

console.log(arr)
console.log(arr2)

let obj ={
    name: 'Version 1', additionalInfo: { version: 1 }

}

let obj1 = {...obj}
let obj2 = Object.assign({},obj)

console.log(obj)
console.log(obj1)
console.log(obj2)

obj1.additionalInfo.version = "new"


console.log(obj)
console.log(obj1)
console.log(obj2)

let originalObject = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    },
    hobbies: ["reading", "gaming"]
  };
  
  // Creating a deep copy using JSON methods
  let deepCopy = JSON.parse(JSON.stringify(originalObject));
  
  // Modify the deep copy
  deepCopy.name = "Jane";
  deepCopy.address.city = "Los Angeles";
  deepCopy.hobbies.push("swimming");
  
  console.log("Original Object:", originalObject);
  console.log("Deep Copy:", deepCopy);
  
