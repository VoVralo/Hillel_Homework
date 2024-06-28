let buttonAddress = document.getElementById('btn-prompt');
let buttonMoveUser = document.getElementById('btn-address');
let userAddress = ''; 

buttonAddress.addEventListener('click', function() {
   userAddress = prompt('Write Address where you want to move');
});

buttonMoveUser.addEventListener('click', function() {
   if (userAddress) {
       window.location.href = userAddress;
   } else {
       alert('Please enter an address first.');
   }
});
