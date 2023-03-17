class Littleprincess{
    constructor()
    {
        this.name="Barathi"
        this.age=24;
    }
}
var lil=new Littleprincess();
console.log(lil.name+" "+lil.age);

class Company{
    constructor()
    {
        this.companyName="Capgemini"
    }
}
class Company2 extends Company{
  constructor(id,name){
    super();
    this.id=id;
    this.name=name;
  }
}
var emp=new Company2(101,"Surya")
console.log(emp.id+" "+emp.name+" "+emp.companyName)