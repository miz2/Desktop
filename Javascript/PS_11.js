// question 1
class Complex{
    constructor(real,img){
        this.real=real;
        this.img=img;
    }
    add(num){
        this.real=this.real+num.real
        this.img=this.img +num.img
    }
    // now using getters and setters 
    get real(){
        return this._real;
    }
    get img(){
        return this._img;
    }
    set real(newReal){
        this._real=newReal
    }
    set img(newImg){
        this._img=newImg
    }
}
let a =new Complex(2,5)
a.real=10
a.img=10
let b=new Complex(4,7)
console.log(a.add(b))
console.log(`${a.real}+${a.img}i`)
// console.log(a.real,a.img)

// ques2 
// class Human{
//     constructor(name,favfood){
//         this.name=name;
//         this.favfood=favfood
//     }
//     walk(){
//         console.log(this.name+"Human is walking")
//     }
// }
// class Student extends Human{
// walk(){
//     console.log(this.name+" Student is walking")
// }
// }
// let o=new Student("Honey","Bhindi")
// o.walk()
// console.log(o instanceof Human)