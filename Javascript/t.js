const meal=["soup","steak","ice cream"]
let [starter]=meal
console.log(starter)
let set =new Set();
set.add(1)
set.add(2)
set.add(3)
set.add(2)
set.add(3)
console.log(set)

let obj={
    key:1,
    value:4
}
let ou={...obj}
ou.value-=obj.key
console.log(ou.value)