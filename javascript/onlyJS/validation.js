
function validate(){
var password="Bar";
var regularExp=/^[A-Za-z][A-Za-z0-9_]{7,29}$/;
var msg;
if(password.length>5)
{
    msg="good";
    console.log(msg);
}
else
{
msg="poor";
console.log(msg);
}
}
validate();