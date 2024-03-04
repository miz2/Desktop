let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolve after 2 seconds")
        resolve(47)
    },2000)
})
// chaining is done here :resolving callback hell
p1.then((value)=>{
    console.log(value)
    // our custom promise 
   let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2")
    },2000)
         
   })
   return p2
}).then((value)=>{
    console.log("WE are done")
}).then((value)=>{
    console.log("ab to pakka done")
})