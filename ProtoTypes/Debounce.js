const element = document.querySelector("input")

function onChnageData(){
    console.log("testtstst")
}

// without debounce
// element.addEventListener("keyup",onChnageData)

// with debounce

function withDebounce(fun,time){
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(() =>fun(),time);
    }

}

const result = withDebounce(onChnageData,1000)

element.addEventListener("keyup",result)