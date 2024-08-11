console.log("start")

// setTimeout(()=>{
//     console.log("Middle Value")
// },[3000])

function getData(){
    return "test"
}

function getDataFromAPI(callback){
        setTimeout(()=>{
            // console.log("success")
            callback("success")
        },[1000])
}

// console.log(getData())
getDataFromAPI((value)=>console.log(value))

console.log("stop")