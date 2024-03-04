let naam="Bewakoof bacha\""
console.log(naam.length)
console.log(naam.toLowerCase())
console.log(naam.toUpperCase())
console.log(naam.slice(4,8))
console.log(naam.slice(2))
let naya_naam=naam.replace("bacha","aadmi")
console.log(naya_naam)
let fr="naman"
console.log(naam.concat("is a friend of ",fr," ok"))
let fre="     meera   "
console.log(fre)
console.log(fre.trim())
console.log("U know Strings are immutable")
for(let j=0;j<fre.length;j++){
    console.log(fr[j])
}
// fr[0]="g" is not allowed as immutable