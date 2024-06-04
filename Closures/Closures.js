function OuterFunction(){
    var message = "outerFunctionScope"
    function innerFunction(){
        console.log(message)
    }
    innerFunction()
}
console.log(message)

OuterFunction()