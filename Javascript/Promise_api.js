let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 1")
    },12000)
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Value 2")
        reject(new Error("Error"))
    },23000)
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 3")
    },3000)
})
p1.then((value)=>{
    console.log(value)
})

p2.then((value)=>{
    console.log(value)
})

p3.then((value)=>{
    console.log(value)
})
// When all rpomises get resolved we get aray of promises 
let pro_al=Promise.all([p1,p2,p3])
pro_al.then((value)=>{
    console.log(value)
})
// If we have error but want them so we use promise all setteled

// let pl=Promise.allSettled([p1,p2,p3])
// pl.then((value)=>{
//     console.log(value)
// })

// Promise.race gives value of the fastest:error in case of rejection

let p7=Promise.race([p1,p2,p3])
p7.then((value)=>{
    console.log(value)
})

// Promise.any must be used in case of rejection
// let p8=Promise.race([p1,p2,p3])
// p8.then((value)=>{
//     console.log(value)
// })
// resolved promise
let y1=Promise.resolve(6)
y1.then((value)=>{
        console.log(value)
     })
// rejected promise
let y2=Promise.reject(new Error("Hey kya haal bro"))
y2.then((value)=>{
    console.log(value)
 })