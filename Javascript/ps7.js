document.getElementsByTagName("nav")[0].firstElementChild.style.color="white"
// document.getElementsByTagName("nav")[0].firstElementChild.style.color="green"
document.getElementById("n1").firstElementChild.style.color="green"
document.getElementById("n1").lastElementChild.style.color="grey"

Array.from(document.getElementsByTagName("li")).forEach(ele =>{
    ele.style.background="red"
})
