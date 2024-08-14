let sample = new Promise((resolve,reject)=>{
    let data = "test"
    if(data=="test"){
        resolve("success")
    }else{
        reject("failure")
    }
})

sample.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})