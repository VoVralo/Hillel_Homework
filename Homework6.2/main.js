function averageNumbers(elements) {
   let count = 0;
   let sum = 0;

   for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (typeof element === 'number') {
         sum += element;
         count++;
      }
   }

   return count === 0 ? 0 : sum / count;
}

console.log(averageNumbers(['sdasa', 22, true, false, 12, 2 ]));
