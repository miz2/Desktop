const prompt= require("prompt-sync")();
let x=prompt("Enter Your age :")
x=Number.parseInt(x)
const canDrive=(age)=>{
    return age>=18?true:false
}
if(canDrive(age)){
    // alert("Yes you may drive")
    console.log("Yes you may drive")
}
else{
    // alert("Can't drive")
    console.log("Can't drive")
}