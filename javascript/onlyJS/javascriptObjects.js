/* there are there way to create object
1)by object literal
2)by creating instance of object(using new keyword)
3)by using object constructor
*/

//by object literal
emp={id:101,name:"Barathi",salary:50000}
document.write(emp.id+" "+emp.name+" "+emp.salary);

//by creating instance of object directly(using new keyword)
var emp2=new Object();
emp.id1=102;
emp.name1="surya";
emp.salary1=45000;
document.write(emp.id1+" "+emp.name1+" "+emp.salary1);

//by using object constructor
function employee(id2,name2,salary2)
{
    this.id2=id2;
    this.name2=name2;
    this.salary2=salary2;
}
e=new emp(103,"appu",54000);
document.write(e.id2+e.name2+e.salary2);