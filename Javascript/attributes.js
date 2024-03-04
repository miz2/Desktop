let first=document.getElementById("first")
let a=first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
// set a class attribute
// first.setAttribute("hidden","true")
first.setAttribute("class","sach")
first.removeAttribute("class")
console.log(first.attributes)
// data- *attributes are for custom attribute
// data - is given jsuty that our script doesn't fails in future :accessed by ID as it is unique
console.log(first.dataset)
console.log(first.dataset.player)