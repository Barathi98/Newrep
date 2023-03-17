//object by literal
emp={id:101,name:"Barathi",salary:40000}
console.log(emp.id +" "+emp.name+" "+emp.salary);
//By creating instance of Object
var employee=new Object();
employee.id=102;
employee.name="Surya";
employee.salary=40000;
console.log(employee.id+employee.name+employee.salary);
//By using an Object constructor
function emp1(id,name,salary)
{
    this.id=id;
    this.name=name;
    this.salary=salary;
}
e=new emp1(103,"dhiya",40000);
console.log(e);
console.log(e.id+" "+e.name+" "+e.salary);
//Defining method in JavaScript Object
function empNew(id,name,salary)
{
    this.id=id;
    this.name=name;
    this.salary=salary;
    this.changeSalary=changeSalary;
    function changeSalary(changedSalary)
    {
        this.salary=changedSalary;
    }

}
e2=new empNew(104,"varun",40000);
console.log(e2);
e2.changeSalary(45000);
console.log(e2);