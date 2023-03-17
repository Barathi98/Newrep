// more than one static method with similar names.
class Test{
    static display(){
        return "this is first method"
    }
    static display(){
        return "This is 2nd method,because if there is 2 static methods with same name js always invoke the last one"
    }
    }
    console.log(Test.display())
//to invoke a static method within the constructor and  invoke a static method within the non-static method.
class Test2{
    static print()
    {
        return "this is print method"
    }
    
    show()
    {
        console.log( Test2.print()+"invoked in non-static method");
    }
    constructor()
    {
        console.log(Test2.print())
        console.log(this.constructor.print());
    }
    }
    var obj=new Test2();
     obj.show();