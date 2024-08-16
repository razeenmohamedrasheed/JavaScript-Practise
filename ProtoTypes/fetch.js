//GET METHOD


let url = 'https://fakestoreapi.com/products'
const getAPIData = () => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); 
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

getAPIData()

const getAsyncAPIData= async()=>{
    let response = await fetch(url)
    if (response.ok) {  
        let data = await response.json();  
        console.log(data);
    } else {
        console.log(`HTTP error! Status: ${response.status}`);
    }
}