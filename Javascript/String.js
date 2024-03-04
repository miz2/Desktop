let str="Text Manipulating string"
console.log(str)
console.log(str.length)
let s2='can also make by single quotes'
console.log(s2)
console.log(str[0])
console.log(str[1])
// Template literals 

let b1="pramod"
let b2="nikhil"
// Nikhil is friend of pramod
let sentence=`b2 is a friend of b1`
console.log(sentence)
// but i doesn't work the way we want
// String Interpolation
console.log("--------------String Interpolation---------")
let sen=`${b2} is a friend of ${b1}`
console.log(sen)
console.log("--------------Escape Sequence---------")
let f="Ba\tn\n\ran\'na"
let c="Carra\rige Return"
console.log(f)
console.log(c)