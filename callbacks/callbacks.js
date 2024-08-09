console.log("start")

function getData(callback){
    setTimeout(()=>{
        callback("CALLBACK TRIGGERED")
    },[2000])
}

function printData(value){
    console.log(value)
}

getData(printData)

console.log("end")