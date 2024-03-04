// We must not use callbacks frequently 
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
        sendEmergencyMessageToCeo();
        return
    }
    alert("Good Morning sirji "+src)
}
// loadscript is a function :written by a programmer : in case code does not run it will be disaster 
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",gm)

// Giving a script with error

loadScript("https://cdn.jsdeli.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",gm)

// loose inversion of control :when laodscript is passed and function can bepassed with error hence : emergency message can be sent to CEO 

// Pyramid of DOOM 
// loadScript("https://cdn.jsdeli.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",fucntion gm(error,src){
//     if(error){
//         sendEmergencyMessageToCeo();
//         return
//     }
//     loadScript("https://cdn.jsdelivr.net/npm/bootstrap2@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",gm(error,src))

// calling the laodscript again and again :to resolve it we must use promises :avoids readablity 

// })