const promise1 = new Promise((resolve,reject)=>{

    let username = "Razeen"
    if(username == "Razeen"){
        resolve("success")
    }else{
        reject("failed")
    }
})

promise1.then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})

const promise2 = new Promise((resolve,reject)=>{
    resolve(["java","python","GoLang"])
})

const promise3 = new Promise((resolve,reject)=>{
    // resolve(["React","Angular","Vue"])
    reject("failed")
})

const promiseALL = Promise.all([promise2,promise3])


promiseALL
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });

  const promiseALLsettled = Promise.allSettled([promise2,promise3])

  promiseALLsettled
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });
