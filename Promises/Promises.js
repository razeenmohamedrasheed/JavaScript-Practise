const promise = new Promise((resolve,reject)=>{
    if(false){
        resolve("Resolved")
    }else {
        reject("Rejected")
    }
})

promise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})


function checkValue(num){
    return new Promise((resolve,reject)=>{
        if(num>1){
            setTimeout(()=>{
                resolve("num greater than one")
            },[2000])
        }else{
            reject("Num not greater")
        }
    })

}

checkValue(-11).then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})