// unpacking in distinct variables from an array ,or properties from object 

// let arr=[3,5,8,9,45]
// let [a,b,c,...rest]=arr;
// console.log(a,b,c,rest)

// we want rest value starts with 9  

// let arr=[3,5,8,9,45]
// let [a, , ,...rest]=arr;
// console.log(a,rest)

// we can also destructure objects 
let arr=[3,5,8,9,45]
let {a,b}={a:1,b:5}
console.log(a,b)

