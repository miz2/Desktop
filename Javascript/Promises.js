let pro=new Promise(function(resolve,reject){
    // alert("I am an Albatross")
    // Has two ways: state and result 
    resolve(46)

})
console.log("Heelo")
setTimeout(function(){
    console.log("Hemlo in 2sec")
},2000)
// Does not run in sequence due to set timeout 
console.log("My name is:"+"Miz")
// Returns value of the promise
console.log(pro)

// Fetch ggogle.com homepage =>console.log("Done the work")
// Fetch data from the data api
// Fetch from server 
// Print downloading
// Rest of the script must work and hence parallel execution must be there
