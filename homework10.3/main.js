class Contact {
   constructor(name, phone, email) {
       this.name = name;
       this.phone = phone;
       this.email = email;
   }
}

class ContactBook {
   constructor() {
       this.contacts = [];
   }

   searchContact(name) {
       for (let i = 0; i < this.contacts.length; i++) {
           if (this.contacts[i].name === name) {
               return this.contacts[i];
           }
       }
       return null;
   }

   addContact(name, phone, email) {
       const newContact = new Contact(name, phone, email);
       this.contacts.push(newContact);
   }
}

let myContactBook = new ContactBook();

myContactBook.addContact('John Doe', '123-456-7890', 'john.doe@example.com');
myContactBook.addContact('Jane Smith', '098-765-4321', 'jane.smith@example.com');

let foundContact = myContactBook.searchContact('John Doe');
if (foundContact) {
   console.log('Контакт найден:', foundContact);
} else {
   console.log('Контакт не найден.');
}
