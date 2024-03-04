let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "milk"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
}
let is_shop_open = true;
let toppings_choice=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(
                console.log("Which Topping would u like")
            )
        },3000)
    })
}
async function kitchen(){
    console.log("A");
    console.log("B");
    console.log("C");
    // going out and other tasks will continue
    await toppings_choice()
    console.log("D");
    console.log("E");
}
kitchen()
console.log("Doing the Dishes");
console.log("Cleaning the tables");
console.log("Taking new orders");