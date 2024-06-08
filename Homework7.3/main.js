function numming() {
   let num = 0;

   function firstAskCheck() {
      let userNum = prompt('введіть число більше 100');

      if (userNum > 100) {
         num += parseInt(userNum);
      };
   }

   for (let x = 0; x < 10; x++) {
      firstAskCheck();

      if (num > 100) {
         console.log(parseInt(num));
         break;
      }
   }
}

numming();
