// alert("Hello")
// console.log("Whart is going on0")
// let a=4;
// let b=7
// console.log(a+b)
// console.log(console)
// console.timeEnd("a")
// console.log("For v/s While")
// console.time("Forloop")
// for(let i=0;i<5;i++){
//     console.log(233)
// }
// console.timeEnd("Forloop")
// console.time("Whileloop")
// let j=0
// while(j<5){
//     console.log(233)
//     j++
// }
// console.timeEnd("Whileloop")
// Can use Modals in place of this
// alert("Kindly enter value of a:")
// // We can give default value to prompt
// let a= prompt("Enter a here",78)
// a=Number.parseInt(a)
// alert("You entered a of type:"+(typeof a))
// let wr=confirm("You want to write it on the page??")
// if(wr){
//     document.write(a)
// }
// else{
//     document.write("Please allow to write")
// }

// Window Object :
// window.console.log(window)
// console.log(document.body)
// document.body.style.background="red"
// document.body.style.fontSize=30
// location.href="https://codewithharry.com"


console.log(document.body.firstChild)
console.log(document.body.lastChild)
let arr=Array.from(document.body.childNodes)
console.log("Nodelist to array"+arr)
console.log(document.body.childNodes)