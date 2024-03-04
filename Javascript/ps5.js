let arr=[1,2,3,6,8,8,98,7]
const prompt= require("prompt-sync")();
// Ques 1
// let a= prompt("Enter a Number:")
// console.log(typeof a)
// a=Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Ques 2

// do{
//     let a= prompt("Enter a Number:")
//     a=Number.parseInt(a)
//     arr.push(a)
//     console.log(arr)
// }while(a!=0);

// Ques 3
let a2=[4,6,98,90,60,35,75]
// let f=a2.filter((x)=>{
//     return x%10==0
// })
// console.log(f)

// Ques 4
let s=a2.map((d)=>{
    return d*d
})
console.log(s)
// Ques 5

let sa=[1,2,3,4,5,6,7,8,9]
let har=sa.reduce((x1,x2)=>{
    return x1*x2
})
console.log(har)