function greet(){
    let name="john"
    function hi(){
        return 'hi'+ " "+name;
    }
    return hi
}
const g1=greet()
console.log(g1);
console.log(g1());
console.log(greet());
