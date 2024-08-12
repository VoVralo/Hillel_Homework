document.addEventListener('DOMContentLoaded', function() {
   const taskInput = document.getElementById('taskInput');
   const addTaskBtn = document.getElementById('addTaskBtn');
   const taskList = document.getElementById('taskList');

   function addTask() {
       const taskText = taskInput.value.trim();
       if (taskText !== '') {
           const li = document.createElement('li');
           li.textContent = taskText;

           const deleteBtn = document.createElement('span');
           deleteBtn.classList.add('delete-btn');
           deleteBtn.textContent = '❌';

           li.appendChild(deleteBtn);
           taskList.appendChild(li);
           taskInput.value = '';
       }
   }

   addTaskBtn.addEventListener('click', addTask);

   taskList.addEventListener('click', function(event) {
       if (event.target.classList.contains('delete-btn')) {
           event.target.parentElement.remove();
       }
   });

   taskInput.addEventListener('keypress', function(event) {
       if (event.key === 'Enter') {
           addTask();
       }
   });
});
