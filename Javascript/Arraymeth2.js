let arr=[2,7,9,6,9]
// delete arr[0]
// console.log("does nor chnage length"+arr.length)
let neAr=[2,79,4,9,7]
let ce=[8,9,7,6]
let carr=arr.concat(neAr,ce)
console.log(carr)
carr.sort()
console.log(carr)
let compare= (a,b)=>{
    return a-b
}
// Sorting can be done by adding a compare function
let n=[441,9,6,7,78,789,41]
n.sort(compare)
console.log(n)
n.reverse()
console.log(n)
// Splice adds new array elements and replaces previous: modifies source array 
n.splice(2,3,1021,106,1027)
console.log(n)
// Slice :takes out part of the array
const num=[7,8,9,67,78]
let d=num.slice(2)
// No out of bound exception like in Java
let f=num.slice(3,10)
console.log(num)
console.log(d)
console.log(f)
