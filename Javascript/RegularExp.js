const regex=/very/g
const r1=/(Rahul){2}/gi
const text="RahulRahul is very very  awesome boy very Rahul"
console.log(text.replace("very","VERY"))
console.log(text.replace(regex,"VERY"))
console.log(text.replace(r1,"VERY"))