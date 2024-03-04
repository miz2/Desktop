// It is a combination of function bundled together with refernces to its surrounding state . 
// gives access to an outer function's scope from inner function
message="Good Global"
function hello(){
    message="gm"
    {
       let message="good afternoon"
        console.log("Hello :",message)
    }
    console.log("Hello :",message)
    let c=function hello2(){
        // reference of message 
        console.log("I m c")
    }
    return c;
}
c=hello()
c()
