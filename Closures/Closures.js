function OuterFunction(){
    let message = "outerFunctionScope"
    function innerFunction(){
        console.log(message)
    }
    innerFunction()
}

OuterFunction()