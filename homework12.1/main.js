let buttonAddress = document.getElementById('btn-prompt');
let buttonMoveUser = document.getElementById('btn-adress');
let userAdress = ''; 

buttonAddress.addEventListener('click', function() {
   userAdress = prompt('Write Address where you want to move');
});

buttonMoveUser.addEventListener('click', function() {
   if (userAdress) {
       window.location.href = userAdress;
   } else {
       alert('Please enter an address first.');
   }
});
