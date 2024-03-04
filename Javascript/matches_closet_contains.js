// console.log(id1)
// console.log(id2)
// Above is not a good practice 
let id1=document.getElementById("id1")
let id2=document.getElementById("id2")
let sp1=document.getElementById("sp1")
 console.log(id1)
console.log(id2)
console.log(id1.matches(".class"))
// Does an element match with a css selector 
console.log(id1.matches(".box"))
// closet:look for nearest ancestor
console.log(sp1.closest(".box"))
console.log(sp1.closest("#sp1"))
// contains: if an element is present then 
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))