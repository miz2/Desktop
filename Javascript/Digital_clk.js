setInterval(()=>{
    
    let d=new Date()
    
let op={
    weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"
}   
let t=d.toLocaleTimeString("en-us",op)
time.innerHTML=d
},1000)