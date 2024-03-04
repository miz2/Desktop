// intuitive method
let a=document.getElementsByTagName('div')[0]
// a.innerHTML=a.innerHTML +'<h1>Hello World! </h1>'

// append at the end of node
let div=document.createElement('div');
div.innerHTML='<h1>Hello Idiots!</h1>';
// a.appendChild(div)

// above done without use of for loop
// prepend :insert at the beginning of the node
// a.prepend(div)

// before :insert before a node:in this case out of the container 
 a.before(div)
//  after :insert after  a node
a.after(div)

// replacewith:in this case takes away place of container 
a.replaceWith(div)