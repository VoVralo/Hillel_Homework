$(document).ready(function() {
   $('.todo-item').on('click', function() {
       var text = $(this).data('text');
       $('#todoText').text(text);
   });
});