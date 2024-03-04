class RailForm{
    constructor(givenname,trainno){
        console.log("Constructor called:"+ givenname +" "+trainno)
        this.name=givenname;
       this.trainno=trainno;
    }
    submit(){
        console.log("form submitted for Train No :",this.trainno)
    }
    cancel(){
        console.log(this.name+" Form cancelled for Train No :",this.trainno)
    }
    // fill(givenname,trainno){
    //     this.name=givenname;
    //     this.trainno=trainno;
    // }
}
let miz=new RailForm("Miz",234560)

let rohan=new RailForm("rohan",134568)
// miz.fill("miz",122304)
// rohan.fill("rohan",134568)
miz.submit();
rohan.submit()
miz.cancel()