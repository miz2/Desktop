// 1
console.log(hoist);
var hoist="hbjdfzvjhsdf"
// 2
var h1;
console.log(h1);
h1="ehbfbje"
console.log(h1);
// but the same with let returns reference error

// function
hoisted();
function hoisted(){
    console.log("hey");
}
// below will return error
// h1();
// var h1=function h1(){
//     console.log("dfdf");
// }
// function inside function
function f1(a)
{
function f2(b){
    function f3(c){
        return a+b+c;
    }
}
}
function outerFunction() {
    let outerVariable = 'I am outer!';

    function innerFunction() {
        let innerVariable = 'I am inner!';
        console.log(outerVariable); // Accessing outerVariable from the outer function
        console.log(innerVariable); // Accessing innerVariable from the inner function
    }

    innerFunction(); // Calling the inner function
}

outerFunction(); // Calling the outer function
