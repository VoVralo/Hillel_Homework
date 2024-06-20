let user = {
   name: "Іван",
   age: 30,
   location: "Київ",

   displayInfo: function() {
       console.log(`Ім'я: ${this.name}, Вік: ${this.age}, Місце проживання: ${this.location}`);
   }
};

user.displayInfo();
