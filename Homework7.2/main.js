function multiply(x) {
   return function(y) {
     return x * y;
   };
 }
 
 const result = multiply(5)(2);
 console.log(result);
 