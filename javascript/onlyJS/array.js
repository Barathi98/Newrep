/*
3ways
by array literal
by creating instance of array(using new key word)
by using an array constructor(using new keyword)
*/
var array1=[1,2,3,4,5,6,7,8];
console.log(array1);
for (i=0;i<array1.length;i++){  
    console.log(array1[i]);  
    }  
//using new keyword
    var i;  
    var emp = new Array();  
    emp[0] = "Arun";  
    emp[1] = "Varun";  
    emp[2] = "John";  
      
    for (i=0;i<emp.length;i++){  
    console.log(emp[i]);  
    }   
//using constructor
var emp1=new Array("Jai","Vijay","Smith");  
for (i=0;i<emp1.length;i++){  
console.log(emp1[i]);  
}       