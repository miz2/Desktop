class Employee{
    login(){
        console.log(`Employee has logged in`)
    }
    logout(){
        console.log(`Employee has logged out`)
    }
    reLeave(leaves){
        console.log(`Employee has requested for ${leaves} leaves`) 
    }
}

class Programmer extends Employee{
    // if there is no constructor in child class ,this will be automatically called
    // constructor(...args){
    //     super(...args)
    // }
reqCoff(x){
    console.log(`Employee wants ${x} coffee`)
}
reLeave(leaves){
super.reLeave(5)
console.log("One extra is granted")
}
}
let e=new Employee()
e.login()
e.reLeave(4)
let pro=new Programmer()
pro.login()
pro.reLeave(4)