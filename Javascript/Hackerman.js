let a=[
    "Connecting to Hacking Tool",
    "Connecting to Instagram",
    "Connecting to server 1",
    "failed to connect",
    "Connecting to server 2",
    "Connected Succesfully",
    "Username i_m_miz_..",
        "Trying Brute Force...",
        "200K passwords tried...",
        "Match not found",
        "Another 200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match found...",
        "Accessing Account...",
        "Hack Successful..."

]
const sleep=async(seconds) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(true)},seconds*1000)
    }
    )

    
}
const showHack= async (message)=>{
    await sleep(2)
    // console.log(message)
    text.innerHTML=text.innerHTML +message +" <br>"
}
(async () => {
    for (let i = 0; i < a.length; i++) {
            await showHack(a[i])
    }
})()