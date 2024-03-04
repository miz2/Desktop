let num=[1,7,68,78]
let b=num.toString()
console.log("to string",b)
let c=num.join("_")
console.log(c,typeof c)
let r=num.pop()
console.log(num,r)
num.push(48)
console.log(num)
// rmoves element from start of array
let re=num.shift( )
console.log(re,num)
// Returns array length and then adds element in beginning 
let rs=num.unshift(47)
console.log(rs,num)
