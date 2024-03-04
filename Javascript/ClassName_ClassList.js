// we can give multiple classes 
first.className="text-black red blueshirt"
// removing 
console.log(first.classList)
first.classList.remove("red")
first.classList.add("hara")
console.log(first.classList)
// toggle :T F T F T F T F
first.classList.toggle("tog")
console.log(first.classList)
console.log(first.classList.contains("tog"))
