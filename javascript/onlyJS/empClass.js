class Employee{
    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }

    print(){
        console.log(this.id+" "+this.name);
    }
}
var emp1=new Employee(101,"Barathi")
var emp2=new Employee(102,"surya")
var emp3=new Employee(103,"dhiya")
emp1.print()
emp2.print();
emp3.print();

/*hoisting
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of
 functions, variables or classes to the top of their scope, prior to execution of the code.
 
 var e1=new Employee(101,"Martin Roy");  
 var e2=new Employee(102,"Duke William");  
 e1.detail(); //calling method  
 e2.detail();  
   
 //Declaring class  
 class Employee  
   {  
 //Initializing an object  
     constructor(id,name)  
     {  
       this.id=id;  
       this.name=name;  
     }  
     detail()  
     {  
   console.log(this.id+" "+this.name)  
     }  
   }  
*/