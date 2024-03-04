class Animal{
    constructor(name,color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is shout")
    }
}
class Monkey extends Animal{
    eatBanana(){
        console.log("Eating banana")
    }
    hide(){
        console.log(`${this.name} is hiding`)
    }
}

let ani=new Animal("Bruto","white")
let m=new Monkey("Jaggu","purple")
ani.shout()
m.eatBanana()
m.hide()