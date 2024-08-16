const element = document.querySelector("input")

function onChnageData(data){
    console.log("testtstst",data)
}

// without debounce
// element.addEventListener("keyup",onChnageData)

// with debounce

function withDebounce(fun,time){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(() =>fun(args),time);
    }

}

const result = withDebounce(onChnageData,1000)

element.addEventListener("keyup",result)