function basic(){
    console.log("functions.....")
}

function basicParams(params){
    console.log(params,"is defined inside this function")
}

const expressionFunction = function(){
    console.log("function called using expression.....")
}

const expressionFunctionParam = function(param){
    console.log(`function called using expression..... also with ${param}`)
}

function x(){
    console.log("C value....")
    return "Data"
}
let print = x()

basic()
basicParams("parameter")
expressionFunction()
expressionFunctionParam("new parameter")
x()
console.log(print)

function test(){
    var abc ="testtt"
}

console.log(abc)