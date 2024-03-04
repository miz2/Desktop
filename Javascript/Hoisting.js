// it refers to the process where by the interpreter appears to move the declarations to the top of the code before execution
// variables can be referenced before they are declared in JS
// only declarations and not initializations 
console.log("Value of a with var : "+a)
greet()
function greet(){
    console.log("Good Morning")
}
greet()
var a=10; // declaration hoisted at the top  but initialization is not 
console.log("Value of a with var : "+a)

// behaviour changes with let or const hence get error 
// console.log(ar) we get error if this line is executed 
let ar=2
console.log(ar)

// also if we use const arrow function then we get error 
// greet2() line gives error
let greet2=function(){
    console.log("gn")
}