let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "milk"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
}
let is_shop_open = true;
// let order = () => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             resolve()
//         }
//         else {
//             reject()
//         }
//     })
// }
async function order() {
    try {
        await abc
    }
    catch (error) {
        console.log("abc does not exist", error);
    }
    finally {
        console.log("Runs always");
    }
}
order()