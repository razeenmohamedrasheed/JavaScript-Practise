//Basics of promise using reolve and reject 


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

const promise1 = new Promise((resolve,reject)=>{
    resolve(["java","python","GoLang"])
})

const promise2 = new Promise((resolve,reject)=>{
    // resolve(["React","Angular","Vue"])
    reject("failed")
})


const promiseData = Promise.all([promise1,promise2])
const promiseData1 = Promise.allSettled([promise1,promise2])
const promiseData3 = Promise.any([promise1,promise2])


promiseData.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

promiseData1.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})