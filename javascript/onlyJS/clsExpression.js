//unnamed expression
var emp=class{
    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }
};
console.log(emp.name) //emp

//named expression
var emp2=class emp3{
 constructor(id,name){
    this.id=id;
    this.name=name;
 }
};
console.log(emp2.name) //emp3