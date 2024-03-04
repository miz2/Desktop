class Animal{
    constructor(name){
        this._name=name;
    }
    get name(){
        return this._name 
    }
    set name(newName){
        this._name=newName
    }
    fly(){
        console.log("I want to fly ")
    }
}
class Rabbit extends Animal{
    eat(){
        console.log("eating")
    }
}
// let a =new Animal("honey")
let a =new Rabbit("honey")
a.fly()
a.name="jacko"
console.log(a.name)
let b=34;
// instanceOf object helps to check whether an object belongs to a certain class 
// It also returns true even if the object belongs to  class or any other that is inheriting it 
console.log(a instanceof Animal)
console.log(b instanceof Animal)