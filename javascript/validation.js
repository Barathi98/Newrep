function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
      else if(password!=1 || password!=2 ||password!=3 ||password!=4 ||password!=5 ||password!=6 ||password!=7 
        ||password!=8 ||password!=9 ||password!=0 ||password!="!" ||password!="@" ||password!="#"
        ||password!="$" ||password!="%" ||password!="^" ||password!="&" ||password!="*" ||password!="("
        ||password!="_" ||password!="-" ||password!="+")
        {
             alert("password must be contains mentioned constraints")
        }
     <p> password should contains numerics and "!@#$%^&*()-_" any of these special characeters </p>   
    }  