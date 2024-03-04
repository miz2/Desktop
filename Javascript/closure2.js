function init() {
    var name = "Mozilla" //name is local varaible created by init 
    function disName() {
        // disName () is an inner function in the parent function
        console.log(name)
    }
    // only references will return and not the actual value hence values will be updated 
    name = "Miz"
    return disName;
}

let c = init()
c()
// example 2:
//in simple words inner functions can have access to outer functions variable 
function returnFunc(){
const x = () => {
    let a = 1
    console.log(a)
    const y = () => {
        let a = 2
        console.log(a)
        const z = () => {
            let a = 5
            console.log(a)
        }
        z()
    }
    y()
}
// x()
return x;
}
let a =returnFunc()
a()