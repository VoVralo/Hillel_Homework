const images = [
   'Screenshot_1.png',
   'Screenshot_2.png',
   'Screenshot_3.png',
   'Screenshot_4.png',
   'Screenshot_5.png',
   'Screenshot_6.png',
   'Screenshot_7.png',
   'Screenshot_8.png',
   'Screenshot_9.png',
   'Screenshot_10.png'
 ];
 
 document.addEventListener('DOMContentLoaded', function() {
   const randomIndex = Math.floor(Math.random() * images.length);
   const randomImage = 'images0/' + images[randomIndex];
   
   const imgElement = document.getElementById('randomImage');
   imgElement.src = randomImage;
 });
 