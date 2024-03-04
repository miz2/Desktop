try {
    let age =prompt("Enter your age")
    age=Number.parseInt(age)
    if(age>120){
        throw new ReferenceError("This is probaly not true")
    }
} catch (error) {
    console.log(error)
}

try{
    // miz
    console.log("miz")
    throw new ReferenceError("I am a ganda bacvha")
    // throw new Error("Tum bewakoof ho")
}
catch(error){
    console.log(error)
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
}
console.log("Script is still running")