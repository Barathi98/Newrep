/*
4 variant of Date constructor to create date object.

Date()
Date(milliseconds)
Date(dateString)
Date(year, month, day, hours, minutes, seconds, milliseconds)
*/
var today=new Date();  
console.log(today);

var date=today.getDate();
var day=today.getDay(); //3rd day of the week
var month=today.getMonth();
var year=today.getFullYear();
console.log(date+"("+day+")/"+month+"/"+year);
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();  
console.log(h+":"+m+":"+s);
console.log("-----------------------------------------------")
