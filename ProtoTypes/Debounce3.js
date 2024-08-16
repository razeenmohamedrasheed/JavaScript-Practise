let element = document.querySelector('input')

const showData=()=>{
    console.log("test")
}

const mainFunction=(funct,time)=>{
    let timer;
    return function(){
     
            clearTimeout(timer)
            timer = setTimeout(()=>funct(),time)
        
    }
}

const result = mainFunction(showData,1000)
element.addEventListener("keyup",result)