let arr=[42,23,21]
// Map makes a new Array from an array
let x=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value +1
})
console.log(arr)
console.log("value of x"+x)
// Filter :does not change original array
let arr2=[42,23,21,2,7,9]
let a2=arr2.filter((value)=>{
    return value<10
})
console.log("New Array after filter",a2)
// Reduce : works like a recursive function 
let arrr=[1,2,6,8,9]
let f=arrr.reduce((h1,h2)=>{
    return h1*h2
})
console.log(arrr)
console.log(f)