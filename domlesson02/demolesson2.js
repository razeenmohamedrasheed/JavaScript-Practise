// document.body.innerHTML = "test0"
// document.title ="good job!"
// console.log(document.title)
// document.body.innerHTML = '<button>Add</button>'
// console.log(document.querySelector('button').innerHTML)

// document.querySelector('.second-button').innerHTML = "Updated"

function subscribe(){
    const btn = document.querySelector('button');
    if(btn.innerHTML == "Subscribe"){
        const btn = document.querySelector('button');
        btn.innerHTML ="Subscribed"
    }else{
        btn.innerHTML ="Subscribe"
    }
}