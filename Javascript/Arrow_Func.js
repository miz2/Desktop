const sayHello=(name)=>
// brackets can be skipped but not recommended 
    console.log("Hello "+name)
const x={
    naam:"Miz",
    role:"  Js Developer",
    exp:20,
    show :function(){
        // console.log(`the name is ${this.naam} \n The role is ${this.role}`)
        // we will get a different result as undefined 
        // that is used to resolve the issues we got 
        let that=this;
        // that has the values of this before it goes to function and becomes window object 
        setTimeout(function(){
            // console.log(this) as a window  object 
            console.log(`the name is ${that.naam} \n The role is ${that.role}`)
        },2000)
    }
    // but using arrow function we can simply do it by 
    ,
    show2:function(){
        // arrow functions use lexical this 
        setTimeout(()=>{
            console.log(`the name is ${this.naam} \n The role is ${this.role}`)
        },3000)
    }
}
console.log(x.role,x.exp)
x.show()
x.show2()
sayHello("miz")