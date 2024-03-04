// synchornous task 

// const prompt= require("prompt-sync")();
// let a=prompt("What is your name")

// Asynchronous programming:it willhappen without caring about the time: goes to background and other thing gets printed 

// setTimeout(function(){
//     console.log("Hey iI am good")
// },3000) 
// console.log("end")

// Call Back Function: function based into another func as an argument is invoked inside the outer function

function loadScript(src,callback){
    let script=document.createElement("script")
    script.src=src
    // To know whether script is loaded or not 
    script.onload=function(){
        console.log("Loaded Script SRC:"+src)
        // No error hence Null is given 
        callback(null,src)
    }
    // Incase there is some error
    script.onerror=function(){
        console.log("Error loading script with Src:"+src)
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script)
    // Function is passed as argument into other function
}
function hello(error, src){
    if(error){
        console.log(error)
        return
    }
    alert("Hemlo Boys"+src)
}
function gm(error, src){
    if(error){
        console.log(error)
        return
    }
    alert("Good Morning sirji "+src)
}
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",gm)

// Giving a script with error

loadScript("https://cdn.jsdeli.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",gm)