//Scope 

var name = "my name"
// let name = "my new name" //Identifier 'name' has already been declared
console.log(name)

let username = "Razeen Mohamed Rasheed"
username="new username"

// const username

console.log(username)

const mydata = [1,2,3,4,5,6,7,8]
// mydata = ["test"] TypeError: Assignment to constant variable.
console.log(mydata)

if(true){
    let name = "inside teh block"
    console.log(name)
}

console.log(name)