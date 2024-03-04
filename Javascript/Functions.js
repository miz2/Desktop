const hello=()=>{
    console.log("Arrow Function hu bhaay")
}
const sum=(p,q)=>{
    return p+q
}
function onePlusAvg(x,y){
    // return 1+ (x+y)/2
    return Math.round(1+(x+y)/2)
}
let a=1,b=3.4;
console.log("Done using function:"+onePlusAvg(a,b))
console.log(sum(7,9.4))
hello()