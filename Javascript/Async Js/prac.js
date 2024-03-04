// console.log(hoist);
// var hoist="afdff"

for(var i=0;i<5;i++){
    console.log(i);
    setTimeout(()=>{
        console.log(`new value ${i}`);
    },1000)
}
console.log("outside "+i);
console.log("using let");
for(let v=0;v<5;v++){
    console.log(v);
    setTimeout(()=>{
        console.log(`new value ${v}`);
    },1000)
}