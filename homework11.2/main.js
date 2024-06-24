let textColor = document.getElementById("text-colored");
let buttontColor = document.getElementById("btn-text");
let reverseColor = 0;

buttontColor.addEventListener('click', function changecolor(event) {
   if (reverseColor === 1) {
      textColor.style.color = ('black');
      reverseColor = 0;
   } else if (reverseColor === 0) {
      textColor.style.color = ('blue')
      reverseColor = 1;
   }
});
