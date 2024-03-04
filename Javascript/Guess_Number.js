let a=Math.random()*100
a=Number.parseInt(a)
let inp;
let score=100
const prompt= require("prompt-sync")();
while(inp!=0){
    score=score-1
    inp=prompt("Enter a Number")
    if(inp==a){
        console.log("Correct Number Guessed")
        console.log( `You guess actual Number in ${100-score}`)
    }
    else if(inp>a && inp<100){
        console.log("Number you entered is greater than actual")
    }
    else{
        console.log("Number you entered is smaller than actual")
    }
}
