// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


const getAPIData = async () => {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        
        if (response.ok) {  
            let data = await response.json();  
            console.log(data);
        } else {
            console.log(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.log('Fetch error:', error); 
     }
};

getAPIData();


// getAPIData()