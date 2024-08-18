console.log("debounce")

let element = document.querySelector("input")



function showdata(){
    console.log("triggering.......")
}

function debounce(func,time){
    let timer;
    return function(){
        clearTimeout(timer
        )

        timer =
        setTimeout(() => {
            func()
        }, time);
    }

}

const result = debounce(showdata,1000)
element.addEventListener('keyup',result)