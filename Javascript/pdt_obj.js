let a=null
let b=34
let c=true
let d=BigInt("418")+BigInt("789")
let e ="Harry"
let f=Symbol("This is a symbol")
let g=undefined
let h
console.log(a,b,c,d,e,f,g,h)
console.log(typeof d)
console.log(typeof a)
console.log(typeof c)
console.log(typeof h)

// Objects : similar to dictionary in python 
const item={
    "Rahul":true,
    "Rohit":78,
    "Shub":false,
    "roh":undefined
}
console.log(item["Rohit"])
console.log(item["Roh"])