class A{
    display(){
        console.log("class A is invoked")
    }
}
class B extends A
{
    
    display(){
        // super.display()
        console.log("Class B is invoked")
    }
}
var b=new B()
b.display();
console.log("------------------------")
// the object of child class invokes both classes method.
var a=[new A(), new B()]  
a.forEach(function(msg)  
{  
msg.display();  
});  