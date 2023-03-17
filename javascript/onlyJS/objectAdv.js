const person={
    name:{
        firstName:"Barathi",
        lastName:"Karunakaran",
        age:24
    },
    education:{
        sslc:"89%",
        hsc:"60%",
        ug:"65%"
    }
};
//dot notation
console.log(person.name.firstName);
console.log(person.name.lastName)
console.log(person.name.age)
console.log(person.name.firstName[0],person.name.firstName[1],person.name.firstName[2]) //it can be used for search/filter/sort operation
//bracket notation
console.log(person["name"])
console.log(person["name"]["firstName"]);
console.log(person["name"],person["education"])
//log property
console.log("---------------------")
const person1= {
    
    name: ["Bob", "Smith"],
    age: 32,
    skills:["java","c","c++","python"]
  };

  
  function logProperty(propertyName) {
    console.log(person1[propertyName]);
    
  }
  
  logProperty("name");
  // ["Bob", "Smith"]
  logProperty("age"); // 32
  logProperty("skills");

  function logProperty2(propertyName) {
    console.log(person[propertyName]);
    
  }
  logProperty2("education")
  //setting object members
  person1.age=45;
  person["name"]["lastName"]="surya"
  console.log(person1.age);
  console.log(person["name"]["lastName"])
  
  //setting value dynamically by member name and adding member and accessing
  const myDataname="height";
  const myDataValue="4.6";
  person[myDataname]=myDataValue; //setting(adding) member/property
  console.log(person.height); //accessing
//this
const person2 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person3 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
person2.introduceSelf();
person3.introduceSelf();
