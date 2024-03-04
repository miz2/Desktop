let signUpBtn=document.getElementById("signupBtn")
let signInBtn=document.getElementById("signinBtn")
let nameField=document.getElementById("nameField")
let title=document.getElementById("title")

signInBtn.onclick=function (){
    nameField.style.maxHeight="0"
    title.innerHTML="Sign In"
    signUpBtn.classList.add("disabled")
    signInBtn.classList.remove("disabled")
}
signUpBtn.onclick=function (){
    nameField.style.maxHeight="60px"
    title.innerHTML="Sign Up"
    signUpBtn.classList.remove("disabled")
    signInBtn.classList.add("disabled")
}
