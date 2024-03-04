const createTodo= async ()=>{
  let op={
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:
        JSON.stringify({
            title: 'Miz',
            body: 'bro',
            userId: 1,
          }),
    }
    let p= await fetch('https://jsonplaceholder.typicode.com/posts', op)
    let response=await p.json()
    return response
}


const getTodo=async(id)=>{
  let response= await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
  let r=await response.json()
  return r;
}
const mainFunc=async()=>{
  let todo=await createTodo()
  console.log(todo)
  console.log(await getTodo(670))
  console.log(await getTodo(1))
  }
  
mainFunc()
// below is normal syntax
// fetch('https://jsonplaceholder.typicode.com/posts', op)
//   .then((response) => response.json())
//   .then((json) => console.log(json));