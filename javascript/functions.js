//apply()
var arr=[1,2,3,4,6,48,93];
var max=Math.max.apply(null,arr);
console.log(max);
//join arrays
var newarr=[65,34,57];
arr.push.apply(arr,newarr);
console.log("--------------------------");
console.log(arr);
//call()
function employee(id,name)
{
    this.id=id;
    this.name=name;
}
function permanentEmp(id,name)
{
    employee.call(this,id,name);
}
console.log(new permanentEmp(1,"Barathi"));
console.log(new permanentEmp(1,"Barathi").name);
console.log(new permanentEmp(1,"Barathi").id);
console.log("---------bind----------------")
//bind
var website={
    name:"google",
    port:1010,
    getName:function()
    {
        return this.name;
    }

}
/*An unbound function is a function that is not bound to an object,
 so this in that function refers to the global (window) object.
  You can either bind a function by making it a method of an 
  object or explicitly binding it using the .bind() method.
  */
var unboundGetName=website.getName;
var boundGetName=unboundGetName.bind(website);
console.log(boundGetName());

//example2
this.name="oracle";
var website2={
    name: "IBM",
    getName2:function()
    {
        return this.name;
    }
};
console.log(website2.getName2() + "-this is local scope"); //without bind()
var retrieve=website2.getName2;
console.log(retrieve());
var boundGetName2 = retrieve.bind(website2);  
console.log(boundGetName2()); // with explicit binding