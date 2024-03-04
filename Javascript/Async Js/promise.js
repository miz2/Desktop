let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "milk"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
}
let is_shop_open=true;
// let is_shop_open=false;
let order=(time,work)=>{

    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                // work will make serial order
                resolve(work())
            },time)
            
        }
        else{
            reject(console.log('Our shop is closed'))
        }
    })
}
order(2000,()=>{
    console.log(`${stocks.fruits[0]} was selected`);
})
// promise chaining
.then(()=>{
    return order(0,()=>{
        console.log("Production has started");
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("The fruit was chopped");
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log("Start the machine");
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log(`Ice cream placed on ${stocks.holder[0]}`);
    })
})
.then(()=>{
    return order(3000,()=>{
        console.log(`${stocks.topping[0]} was selected`);
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Serving Ice Cream---->");
    })
})
.catch(()=>{
    // is_open is false
    console.log("Customer Left");
})
.finally(()=>{
    console.log("See Ya Tommorrow");
})