let arr=[2,89,7,6,7,8,4,1]
// Loops allow accessing 
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
// For each function
arr.forEach((element)=>{
    console.log(element*element)
})
// for each can't be use to access HTML collections ,array.from used to convert the html collection to array
Array.from(arr)
let n="Mizz"
let ad=Array.from(n)
console.log(ad)
// for off loop 
for (let it of ad){
    console.log(it)
}
// for in loop  returns us the keys like in objects
for( let i in ad){
    console.log(i)
}