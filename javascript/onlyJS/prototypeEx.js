function Employee(empId,firstName,lastName)
{
   this.empId=empId;
   this.firstName=firstName;
   this.lastName=lastName; 
}
Employee.prototype.company=" from Capgemini,"
Employee.prototype.location="Bangalore."
var emp1=new Employee(457625,"Barathi","Karunakaran")
var emp2=new Employee(654654,"Sandhiya","Kumar")
console.log(emp1.firstName+" "+emp1.lastName+emp1.company+emp1.location);
console.log(emp2.firstName+" "+emp2.lastName+emp2.company+emp2.location);