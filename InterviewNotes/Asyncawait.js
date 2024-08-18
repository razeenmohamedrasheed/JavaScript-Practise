let url ='https://fakestoreapi.com/products'

const getAPIdata = async () =>{
    try{
        let response = await fetch(url)
        if(response.ok){
            let data = await response.json()
        }else{
            console.log("error")
        }

    }catch(error){
        console.log("error")
    }
}


const postAPIdata = async () =>{
    const newProduct = {
        title: "New Product",
        price: 29.99,
        description: "A description of the new product",
        image: "https://example.com/product.jpg",
        category: "electronics"
    };
    try{
        let response = await fetch(url,{
            method:'POST',
            body: JSON.stringify(newProduct)
        })
        if(response.ok){
            let data = await response.json()
        }else{
            console.log("error")
        }

    }catch(error){
        console.log("error")
    }
}