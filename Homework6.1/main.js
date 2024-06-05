function removeChars(str, charsToRemove) {
   let result = "";
   for (let i = 0; i < str.length; i++) {
       if (!charsToRemove.includes(str[i])) {
           result += str[i];
       }
   }
   return result;
}

console.log(removeChars("hello world", ['l', 'd'])); // Виведе "heo wor"
