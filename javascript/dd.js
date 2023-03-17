
function validatePassword(pwd)
         {
           var re = /^(?=.*\d)(?=.*[A-Z])(.{12,50})$/
           var result= re.test(pwd)
           console.log(result);
      }
      const pwd=validatePassword("Barathi*?9sffjnnhsfhhs");
      
     