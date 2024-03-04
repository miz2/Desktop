// shows the element DOM tree
console.log(document.getElementsByTagName('span')[0])
// printing as an object 
console.dir(document.getElementsByTagName('span')[0])
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)
// Only for element nodes as a string 
console.log(first.innerHTML)
first.innerHTML="<i>Hey i am italic </i>"
// outerHTML :includes outer and inner 
console.log(first.outerHTML)
first.outerHTML="<div>hey</div>"
document.body.firstChild.nodeValue
// if we want as a text 
console.log(document.body.textContent)
document.body.firstChild.data
// to see hidden 
sec.hidden=false
