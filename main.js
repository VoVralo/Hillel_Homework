document.addEventListener('DOMContentLoaded', function() {
   const form = document.querySelector('.js--form');
   const input = document.querySelector('.js--form__input');
   const todosWrapper = document.querySelector('.js--todos-wrapper');

   loadTodos();

   form.addEventListener('submit', function(event) {
       event.preventDefault();
       const todoText = input.value.trim();
       if (todoText !== '') {
           addTodoItem(todoText);
           saveTodos();
           input.value = '';
       }
   });

   todosWrapper.addEventListener('click', function(event) {
       const target = event.target;
       if (target.classList.contains('todo-item__delete')) {
           deleteTodoItem(target.closest('.todo-item'));
           saveTodos();
       } else if (target.tagName === 'INPUT' && target.type === 'checkbox') {
           toggleTodoCompletion(target.closest('.todo-item'));
           saveTodos();
       }
   });

   function addTodoItem(todoText, completed = false) {
       const todoItem = document.createElement('li');
       todoItem.classList.add('todo-item');
       if (completed) {
           todoItem.classList.add('todo-item--checked');
       }

       const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.checked = completed;

       const description = document.createElement('span');
       description.classList.add('todo-item__description');
       description.textContent = todoText;

       const deleteBtn = document.createElement('button');
       deleteBtn.classList.add('todo-item__delete');
       deleteBtn.textContent = 'Видалити';

       todoItem.appendChild(checkbox);
       todoItem.appendChild(description);
       todoItem.appendChild(deleteBtn);

       todosWrapper.appendChild(todoItem);
   }

   function deleteTodoItem(todoItem) {
       todoItem.remove();
   }

   function toggleTodoCompletion(todoItem) {
       todoItem.classList.toggle('todo-item--checked');
   }

   function saveTodos() {
       const todoItems = todosWrapper.querySelectorAll('.todo-item');
       const todos = [];
       todoItems.forEach(item => {
           const todo = {
               text: item.querySelector('.todo-item__description').textContent,
               completed: item.classList.contains('todo-item--checked')
           };
           todos.push(todo);
       });
       localStorage.setItem('todos', JSON.stringify(todos));
   }

   function loadTodos() {
       const existingTodos = todosWrapper.querySelectorAll('.todo-item');
       existingTodos.forEach(todo => todo.remove());

       const todos = JSON.parse(localStorage.getItem('todos')) || [];
       todos.forEach(todo => {
           addTodoItem(todo.text, todo.completed);
       });
   }
});
