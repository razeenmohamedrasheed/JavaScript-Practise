let url = 'https://fakestoreapi.com/products'

function getAPIDData(){
    fetch(url).then(response=>{
        if(!response.ok){
            throw new Error("Failed")
        }
        return response.json()
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
}

getAPIDData()

function postAPIdata(){
    fetch('url',{
        method:"POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            key1: 'value1',
            key2: 'value2'
          })
    }).then((response)=>{
        if(!response.ok){
            throw new Error("Failed")
        }
        return response.json()
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
}