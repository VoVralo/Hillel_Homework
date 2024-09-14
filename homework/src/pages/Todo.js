
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem } from '@mui/material';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Список TODO</Typography>
      <TextField
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        label="Новое задание"
        fullWidth
      />
      <Button onClick={addTodo} variant="contained" color="primary">Добавить</Button>
      <List>
        {todos.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Todo;
