 // CallBacks
 /*Since js is syncrnouse single threaded language it executs  a code one by one
 to make it asynchronus we use callbacks promise async await
 A callback is a function that is passed as an argument 
 to another function and is executed after the completion of that function's operation."*/

 console.log("Running 1")
 setTimeout(()=>{
    console.log("Running 2")
 },[2000])
 console.log("Running 3")