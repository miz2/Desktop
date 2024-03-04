// We will get both when we click :
// btn.addEventListener('click',function(e){
//     alert("Hello meri jaan ")
// })
// btn.addEventListener('click',function(e){
//     alert("Hello meri jaan 2 ")
// })
// If we want to remove an event listener below code will not work as it doesn't have same reference 

// To resolve it we must put it like let x=function.............

let x=function(e){
    // When an event happens the browser creates an event object 
    console.log(e.target)
    console.log(e.type,e.clientX,e.clientY)
    // alert("Hello meri jaan ")
}

let y=function(e){
    console.log(e)
    alert("Hello meri jaan 2")
}
btn.addEventListener('click',x)
btn.addEventListener('click',y)
// let a=prompt("What is your favourite number?:")
// if(a=="2"){
//     btn.removeEventListener('click',function(e){
//         alert("Hello meri jaan")
//     })
// }

// After resolution we can do it as :
let a=prompt("What is your favourite number?:")
if(a=="2"){
    btn.removeEventListener('click',y)
}
