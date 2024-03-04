setTimeout(()=>{
    console.log("Hacking Wifi ...Please wait")
},1000)
// If there is error in one setTimeout then other will not work
try {
    // Only synchronous code will be handled :for below we need other try catch block
    setTimeout(()=>{
        try {
            console.log(rahul)
        } catch (error) {
            console.log("Beta galti kar bethe:"+error)
        }
        
    },2000)
    console.log(rahul)
    
} catch (error) {
    console.log("Beta firse galti kar bethe :"+error)
}
setTimeout(()=>{
    console.log("Fetching Username and Password ...Please wait")
},2000)

setTimeout(()=>{
    console.log("Hacking Rahul's FB id ...Please wait")
},3000)

setTimeout(()=>{
    console.log(" Username and Password...Please wait")
},4000)
