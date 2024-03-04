let marks ={
    gadha:87,
    monika:0,
    lovish:79
}
const prompt= require("prompt-sync")();
for(i=0;i<Object.keys(marks).length;i++){
    console.log("Marks of "+Object.keys(marks)[i]+ " are " +marks[Object.keys(marks)[i]])
}
// Using for in loop
console.log("FOr in loop")
for(let i in marks){
    console.log("Marks of "+i+ "are "+marks[i])
}
let cn=7;
let j;
while(j!=cn){
    j=prompt("Enter any number")
}
const mean=(a,b,c,d)=>{
    return(a+b+c+d)/4
}
console.log(mean(4,8,9,7))
