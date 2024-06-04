console.log("started 1")
function getData(cb){
    setTimeout(()=>{
        cb("im tesing callback logic") 
    },5000)
}

const callData=(value)=>{
    console.log(value)
}
getData(callData)

console.log("Ended 1")