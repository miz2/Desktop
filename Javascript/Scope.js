// {
//     // block level scope hence we get error
//     let a=8   
// }
// console.log(a)
// var has global scope 
{
    var x=6
}
console.log(x)

// function scope
function ax(){
    let a=20;
    console.log(a)

}
ax()