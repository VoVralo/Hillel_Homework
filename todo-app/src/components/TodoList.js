import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodosRequest, addTodo, removeTodo, toggleTodo, editTodo, clearTodos } from '../actions/todoActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(loadTodosRequest());
  }, [dispatch]);

  const handleAdd = (text) => {
    dispatch(addTodo(text));
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = (id, text) => {
    dispatch(editTodo(id, text));
  };

  const handleClear = () => {
    dispatch(clearTodos());
  };

  return (
    <div>
      <button onClick={() => handleAdd('New Todo')}>Add Todo</button>
      <button onClick={handleClear}>Clear Todos</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
            <button onClick={() => handleEdit(todo.id, 'Updated Text')}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;