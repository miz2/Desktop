const loadScript=async (src)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script")
    script.src=src
    script.onload=()=>{
        resolve(src+" Done properly")
    }
    document.head.append(script)
    })
}
// Problem 2
// const mai=async ()=>{
//     console.log(new Date())
//     console.log(new Date().getMilliseconds())
//     let a =await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
//     console.log(new Date().getMilliseconds())
//     console.log(new Date())
//     console.log(a)
// }
// mai()

// Doing it using .then  :Problem 1
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     console.log(value)
// })



// Problem 3
// let p=()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("Ye nahi yrr"))
//     })
// })
// }
// let g=async()=>{
//     try {
//         let c =await p()
//     console.log(c)
//     } catch (error) {
//         console.log("This error has been handled "+error)
//     }
    
// }
// g()

// Problem 4

let h1=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10)
        },2000)
       
    })
}

let h2=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },1000)
       
    })
}
let h3=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30)
        },3000)
       
    })
}
const run=async ()=>{
    console.time("run")
    // Below code is not a good approach 
    // let a1=await h1()   //Fetch first 10 products
    // let a2=await h2() // Fetching another 10
    // let a3=await h3()  //Last 10 

    // Now we have reduced the time taken using Promise all:all get parallely executed
    let a1= h1()   //Fetch first 10 products
    let a2= h2() // Fetching another 10
    
    let a3= h3()  //Last 10 
    let a123=await Promise.all([a1,a2,a3])
    console.log(a123)
    // console.log(a1,a2,a3)
    console.timeEnd("run")
}
run()