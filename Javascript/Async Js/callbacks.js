function one(call_two) {
    console.log("F1:call F2 ");
    call_two()
}
function two() {
    console.log("F2");
}
one(two)
let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "milk"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
}
console.log(stocks.fruits[2]);
let order = (Fruit_name, call_production) => {
    // console.log("Order Placed call production");
    setTimeout(() => {
        console.log(`${stocks.fruits[Fruit_name]} was selected`);
        call_production()
    }, 2000)

}
let production = () => {
    // we get stuck in callback hell or the pyramid of doom
    setTimeout(() => {
        console.log("Order received , starting production---");
        setTimeout(() => {
            console.log("Food has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
            }, 1000)
            setTimeout(() => {
                console.log("Machine was started");
                setTimeout(() => {
                    console.log(` Ice cream was placed on ${stocks.holder[0]}`);
                    setTimeout(()=>{
                        console.log(`${stocks.topping[0]} was added`);
                        setTimeout(()=>{
                            console.log("Serve the ice cream");
                        },2000)
                    },3000)

                }, 2000)

            }, 1000)
        }, 2000)

    })

}
order(0, production)