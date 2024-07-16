class Calculator {
   constructor(){
      this.num1 = 0;
      this.num2 = 0;
   }

   add(num1, num2){
      this.num1 = num1;
      this.num2 = num2;
      return this.num1 + this.num2;
   }

   subtract(num1, num2){
      this.num1 = num1;
      this.num2 = num2;
      return this.num1 - this.num2;
   }

   multiply(num1, num2){
      this.num1 = num1;
      this.num2 = num2;
      return this.num1 * this.num2;
   }

   divide(num1, num2){
      this.num1 = num1;
      this.num2 = num2;
      return this.num1 / this.num2;
   }
}

const calc = new Calculator();

console.log(calc.add(5, 3));       // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6));  // 18
console.log(calc.divide(8, 2));    // 4
