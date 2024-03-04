// If onclick is present on both HTML and Js than JS one will be executed 
let a=document.getElementsByClassName("container")[0]
a.onclick=()=>{
    let b=document.getElementsByClassName("container")[0]
    b.innerHTML="Hello Everyone"
}