function getUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        if(!res.ok){
            console.log(res)
        }
        return res
    })
    .then(data=>console.log(data))
    .catch(error =>console.log(error))
}


// getUsers()

const userData= new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:'GET'
    })
    .then(res=>{
        if(!res.ok){
            console.log("Error")
        }
        return res.json()
    })
    .then(data=>resolve(data))
    .catch(error=>reject(error))
})

userData.then((message)=>{
    let data = message
    console.log(data.forEach((ele)=>{
        console.log(ele)
    }))
}).catch((message)=>console.log(message))

