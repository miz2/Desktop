console.log(document.cookie)
document.cookie="name=miza637452"
document.cookie="name2=miza6dss37452"
// updating the present cookie
document.cookie="name=miz"
let key=prompt("enter your key")
let value=prompt("enter your value")
// can't set key using special characters 
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// in order to decode 
// decodeURIComponent("jjhsdf%")
console.log(document.cookie)