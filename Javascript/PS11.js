const a = async (text, n = 2) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text)
      }, 1000 * n)
    })
  }
  
  (
    async () => {
      let text = await a("Hello")
      console.log(text)
      text = await a("World")
      console.log(text)
    }
  )()

// ques 2:

function sum(a,b,c){
return a+b+c
}

let x = [1, 3, 5,7]
console.log(sum(...x));

// ques 3

(async () => {
    let text = await a("I am resolving after 1 second", 1)
    console.log(text)
    text = await a("I am resolving after 4 seconds", 4)
    console.log(text)
  }
  )()

//   ques 4

function simple(p,r,t){
    return (p*r*t)/100
}
console.log("Simple Interest",simple(2000,5,2))
