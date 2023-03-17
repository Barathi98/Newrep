function fruits()
{
    this.name='Apple'
    this.season = 'Winter';  
    this.color = 'red';
}
function fun()
{
    fruits.call(this) //Calls a method of an object, substituting another object for the current object.
}
fun.prototype=Object.create(fruits.prototype);
const app=new fun();
console.log(app.name,app.season,app.color);