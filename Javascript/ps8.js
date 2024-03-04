// document.getElementById("Google").addEventListener("click",function(){
//     let url="https://www.google.com"
//     // var win=window.open(url,"","width=500,height=500,scrollbars=yes ,resizable=yes")
//     // win.focus()
//     window.location="https://www.google.com"
//     win.focus()
// })
// const fetchContent=async (url)=>{
//     con=await fetch(url)
//     let a=await con.json()
//     return a
// }
// setInterval(async function (){
//     // Fetching content
//     let url="https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))
// },3000)
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
},3000)