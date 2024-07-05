document.addEventListener("DOMContentLoaded", function() {
   const form = document.getElementById("contactForm");

   form.addEventListener("submit", function(event) {
       event.preventDefault();

       clearErrors();

       let isValid = true;

       const nameInput = document.getElementById("name");
       const nameError = document.getElementById("nameError");
       if (nameInput.value.trim() === "") {
           nameError.textContent = "Name is required";
           isValid = false;
       }

       const messageInput = document.getElementById("message");
       const messageError = document.getElementById("messageError");
       if (messageInput.value.length < 5) {
           messageError.textContent = "Message must be at least 5 characters";
           isValid = false;
       }

       const phoneInput = document.getElementById("phone");
       const phoneError = document.getElementById("phoneError");
       const phoneRegex = /^\+380\d{9}$/;
       if (!phoneRegex.test(phoneInput.value)) {
           phoneError.textContent = "Phone number must start with +380";
           isValid = false;
       }

       const emailInput = document.getElementById("email");
       const emailError = document.getElementById("emailError");
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(emailInput.value)) {
           emailError.textContent = "Invalid email format";
           isValid = false;
       }

       if (isValid) {
           console.log("Name:", nameInput.value);
           console.log("Message:", messageInput.value);
           console.log("Phone number:", phoneInput.value);
           console.log("Email:", emailInput.value);
       }
   });

   function clearErrors() {
       const errors = document.querySelectorAll(".error");
       errors.forEach(error => error.textContent = "");
   }
});
