let p=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am a promise and I am fulfilled")
        resolve(true)
       
    },4000)
})
let p1=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am a promise and I am rejected")
        
        reject(new Error("Error hu gi"))
    },4000)
})

console.log(p,p1)
// after p is then we want do something
// To get the value
p.then((value)=>{
    // we will get true
    console.log(value)
})
// To catch error
// p1.catch((error)=>{
//     // We now handle the error as we catched it
//     console.log("Some error is here"+error)
// })
p1.then((value)=>{
    // we will get true
    console.log(value)
},(error)=>{
    console.log("Kuch to error hai"+error)
})