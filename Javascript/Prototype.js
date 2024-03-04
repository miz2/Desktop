let a={
    naam:"Miz",
    language:"Python",
    run:()=>{
        console.log("self run")
    }
}
console.log(a)
let p={
    run:()=>{
        // alert("run");
        console.log("run")
    }
}
// making a prototype of an existing prototype
p.__proto__={
    naam2:"Idiot"
}
a.__proto__=p
a.run()
console.log(a.naam)
console.log(a.naam2)