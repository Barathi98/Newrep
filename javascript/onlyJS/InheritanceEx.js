class Moments extends Date{
    constructor()
    {
        super();
    }
}
var m=new Moments();
console.log("Current Date:")
console.log(m.getDate()+"-"+(m.getMonth()+1)+"-"+m.getFullYear())
//with custom class
class Company{
    constructor(){
        this.company="Bajaj"
    }
}
class Bike extends Company{
    constructor(name,price){
        super(); //to access parent class constructor
        this.name=name;
        this.price=price;
    }

}
var bike=new Bike("Ns-200",100000);
console.log(bike.company+" "+bike.name+" "+bike.price)