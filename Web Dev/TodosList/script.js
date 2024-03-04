const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")
function addTask(){
    if(inputBox.value===''){
        alert("You Must first write something")
    }
    else{
        let li= document.createElement("li")
        li.innerHTML=inputBox.value
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value=""
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName==="SPAN"){
        // deletes the parent elements i.e li will be deleted
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    // content will be stored 
    localStorage.setItem("data" ,listContainer.innerHTML)
}

function showTask(){
    // content related to data
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()