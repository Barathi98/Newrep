// Here, this refers to global "window" object  
this.name = "Oracle";       
var website = {  
  name: "Javatpoint",  
  getName: function() { return this.name; }  
};  
  
console.log(website.getName()); // Javatpoint  
  
//It invokes at global scope  
var retrieveName = website.getName;  
console.log(retrieveName());   //Oracle  
  
var boundGetName = retrieveName.bind(website);  
console.log(boundGetName()); // Javatpoint  