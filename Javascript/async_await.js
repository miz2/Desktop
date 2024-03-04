

// async function miz (){
//     return 7
// }
async function miz (){
    let delhiWeather=new Promise((resolve,remove)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        },1000)
    })
    
    let dehradunWeather=new Promise((resolve,remove)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        },4000)
    })
    // For below code we have a better code 

    // delhiWeather.then(alert)
    // dehradunWeather.then(alert)
    // Better method
    console.log("Fetching Delhi Weather")
    let delw=await delhiWeather
    // Once one gets resolved then next will not work and must be fulfilled 
    console.log("Fetching Delhi Weather is:"+delw)
    console.log("Fetching Dehradun Weather")
    let dew=await dehradunWeather
    
    console.log("Fetching Dehradun Weather is:"+dew)
    return [delw,dew]
}
// If async is removed then below will not be a function: ensures promise will be returned 
// miz().then((x)=>{
//     alert(x)
// })
const cherry=async()=>{
    console.log("Hey I am cherry and not gonna wait")
}
// If we make it an async function then no parallel exectution will be there 
const man=async()=>{
    console.log("This is weather control room ")
    let a=await miz()
    // First miz() will work completely 
    let b=await cherry()
    
}
// console.log("This is weather control room ")
// let a=miz()
// // Here there will be parallel execution
// let b=cherry()
// a.then((value)=>{
//     console.log(value)
// })
man()
