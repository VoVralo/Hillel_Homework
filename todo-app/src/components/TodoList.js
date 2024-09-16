import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, editTodo, clearTodos } from '../actions/todoActions';

const TodoList = () => {
    const [text, setText] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add</button>
            <button onClick={() => dispatch(clearTodos())}>Clear All</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            onClick={() => dispatch(toggleTodo(todo.id))}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                        <button onClick={() => dispatch(editTodo(todo.id, prompt('New text:', todo.text)))}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;