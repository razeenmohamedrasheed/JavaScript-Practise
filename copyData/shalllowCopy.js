//  let originalCopy = 100
//  let CloneCopy = originalCopy

//  console.log(originalCopy)
//  console.log(CloneCopy)

//  originalCopy =90
//  console.log(originalCopy)
//  console.log(CloneCopy)

let newObject ={
    name:'Razeen',
    age:25
}

let copyObject = newObject

console.log(copyObject)
console.log(newObject)

copyObject.name = "johncena"
console.log(copyObject)
console.log(newObject)


let main = [1,2,3,4,5,[1,2,34]]
let clone = main
console.log(main,"----> main")
console.log(clone,"----> clone")

// clone.pop()
clone[5] = "tests"

console.log(main,"----> main")
console.log(clone,"----> clone")

let newdata = {
    name:'test',
    age:20,
    experience:[{name:'yjwgfduyg'},
        "wipro","Rockwell","Samsung"
    ]
}

let cloneData = {...newdata}

cloneData.experience['name'] = "Updated"

console.log(cloneData)
console.log(newdata)