let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "milk"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
}

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve("Shop is open");
            }, ms);
        } else {
            reject(console.log("Shop is closed"));
        }
    });
}

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.fruits[0]} was added first`);
        await time(0)
        console.log("start production");
        await time(2000)
        console.log("Cut the fruits");
        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        await time(1000)
        console.log("Start the machine");
        await time(2000)
        console.log(`Ice cream placed on ${stocks.holder[0]}`);
        await time(3000)
        console.log(`${stocks.topping[0]} was selected`);
        await time(2000)
        console.log("Serving Ice Cream---->");
    } catch (error) {
        console.log("Customer Left");
    } finally {
        console.log("Come tomorrow");
    }
}

kitchen();
