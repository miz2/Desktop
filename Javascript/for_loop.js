// let n=prompt("Enter the value of n")
// n=Number.parseInt(n)
for(let i=0;i<4;i++){
    console.log(i+1)
}
// scope of var is global
// For in loop:also works with arrays
let obj={
    gary:90,
    shub:78,
    ritika:47,
    sheela:79
}
for(let a in obj){
    console.log("Marks of " +a+ " are: " +obj[a])
}
// for of loop :object must be iterable 
for(let b of "gary"){
    console.log(b)
}