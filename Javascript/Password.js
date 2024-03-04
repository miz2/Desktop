class Password{
    constructor(){
        console.log("Welcome to Password Generator")
        this.pass=""
    }
    generatePass(len){
        let chars="abcdefghijklmnopqrstuvwxyz"
        let numbers="1234567890"
        let special="!@#$%^&*()"
        if(len<3){
            console.log("Your Password must be more than 3")
        }
        else{
            let i=0
            while(i<len){
                this.pass+=chars[Math.floor(Math.random()* chars.length)]
                this.pass+=numbers[Math.floor(Math.random()* numbers.length)]
                this.pass+=special[Math.floor(Math.random()* special.length)]
                i+=3
            }
            
        }
        this.pass=this.pass.substr(0,len)
            return this.pass
        
    }
}
let p=new Password()
console.log(p.generatePass(71))