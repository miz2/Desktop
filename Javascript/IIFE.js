let a =()=>{
    // calling a new promise every different point of time
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(456)
    },4000)
})
}
(async()=>{
    let b=await a();
    console.log(b)
    let c=await a();
    console.log(c)
    let d=await a();
    console.log(d)
})()
// all execute at a moment and memory can we released ,hence scope is also concised 