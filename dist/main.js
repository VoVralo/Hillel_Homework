$(document).ready(function() {
   loadTasks();

   $('#addTask').click(function() {
       let taskText = $('#taskInput').val();
       if (taskText) {
           let taskId = Date.now();
           addTaskToDOM(taskId, taskText);
           saveTask(taskId, taskText, false);
           $('#taskInput').val('');
       }
   });

   $('#taskList').on('click', '.task-item', function() {
       let taskId = $(this).data('id');
       let taskText = $(this).data('text');
       $('#taskDetails').text(taskText);
       $('#taskModal').modal('show');
   });

   $('#taskList').on('click', '.task-checkbox', function() {
       let taskId = $(this).data('id');
       let isCompleted = $(this).is(':checked');
       $(this).siblings('.task-text').toggleClass('completed', isCompleted);
       updateTaskStatus(taskId, isCompleted);
   });

   $('#taskList').on('click', '.task-delete', function() {
       let taskId = $(this).data('id');
       $(this).parent().remove();
       deleteTask(taskId);
   });

   function addTaskToDOM(taskId, taskText, isCompleted = false) {
       let taskClass = isCompleted ? 'completed' : '';
       let taskHTML = `
           <li class="list-group-item d-flex justify-content-between align-items-center task-item" data-id="${taskId}" data-text="${taskText}">
               <input type="checkbox" class="task-checkbox" data-id="${taskId}" ${isCompleted ? 'checked' : ''}>
               <span class="task-text ${taskClass}">${taskText}</span>
               <button class="btn btn-danger btn-sm task-delete" data-id="${taskId}">Delete</button>
           </li>
       `;
       $('#taskList').append(taskHTML);
   }

   function saveTask(id, text, isCompleted) {
       let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
       tasks[id] = { text, isCompleted };
       localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   function updateTaskStatus(id, isCompleted) {
       let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
       if (tasks[id]) {
           tasks[id].isCompleted = isCompleted;
           localStorage.setItem('tasks', JSON.stringify(tasks));
       }
   }

   function deleteTask(id) {
       let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
       delete tasks[id];
       localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   function loadTasks() {
       let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
       $.each(tasks, function(id, task) {
           addTaskToDOM(id, task.text, task.isCompleted);
       });
   }
});