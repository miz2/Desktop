let arr=[3,5,6]
let obj1={...arr}
console.log(obj1)

function sum(v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(...arr))

let obj2={
    naam:"miz",
    company:"xyz",
    address:"new cantt"
}
// now changing value of a key
console.log({...obj2,naam:"John",company:"abc"})
// below will not change the values of any key
console.log({naam:"John",company:"abc",...obj2})
