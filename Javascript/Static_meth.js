class Animal{
    constructor(name){
        this.name=Animal.capitalize(name);
    }
    walk(){
        console.log("Animal: " +this.name+ " is walking ")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}
g=new Animal("Oggy")
g.walk()
