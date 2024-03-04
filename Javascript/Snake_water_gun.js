const prompt= require("prompt-sync")();
let user=prompt("Enter S,W OR G:")
let cpuI=Math.floor(Math.random()*3)
console.log(cpuI)
let cpu=["S","W","G"][cpuI]
const match=(cpu,user)=>{
    if(cpu==user ){
        return "Nobody:sadly it's a tie"
    }
    else if(cpu=="S" && user=="W"){
        return "cpu"
    }
    else if(cpu=="G" && user=="W"){
        return "user"
    }
    else if(cpu=="S" && user=="G"){
        return "cpu"
    }
    else if(cpu=="G" && user=="S"){
        return "cpu"
    }
    else if(cpu=="W" && user=="G"){
        return "cpu"
    }
    else if(cpu=="W" && user=="S"){
        return "user"
    }
}
let winner =match(cpu,user)
console.log(`CPU:${cpu} and User:${user} The winner is: ${winner.toUpperCase()}`)