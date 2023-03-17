function Bike(company){
this.company=company;
}
Bike.prototype.getCompany=function(){
    return this.company;
}

function Vehicle(name,price){
    this.name=name;
    this.price=price;
}
var bike=new Bike("Honda")
Vehicle.prototype=bike; //Now Bike treats as a parent of Vehicle.
var vehicle=new Vehicle("shine",90000)
console.log(vehicle.getCompany()+" "+vehicle.name+" "+vehicle.price)