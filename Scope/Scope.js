var globalVar = "global variable";
var globalVar ="updated the variable using let key"
// const globalVar = "test"  this cnario thrwos error
// let globalVar = "test" this cnario thrwos error
console.log(globalVar,"direct call")

if (true){
    if(true){
        var globalVar = "inside the function scope"
        if(true){
            var globalVar = "inside the function scope 2nd scope"
            console.log(globalVar)
        }
    }
    console.log(globalVar) //it will print the latest globalvar ie  "inside the function scope 2nd scope" this one
}

function globaleScopeTest(){
    if (true){
        var globalVarInsideBlock = "inside the function scope"
        if(true){
            var globalVar = "inside the function scope--->"
            if(true){
                var globalVar = "inside the function scope---> 2nd scope"
                console.log(globalVar)
            }
        }
        console.log(globalVar) 
    }
    
}

globaleScopeTest()
console.log(globalVar,"Last Call") 
// console.log(globalVarInsideBlock,"Last Call") 

let globalLet = "global variable let";
// let globalLet = "global variable let"; // Error => Identifier 'globalLet' has already been declared
console.log(globalLet)

if (true){
    if(true){
        let globalLet = "inside the function scope"
        if(true){
            let globalLet = "inside the function scope 2nd scope"
            console.log(globalLet)
        }
    }
    console.log(globalLet) //it will print the fisryt global variable let;
}

