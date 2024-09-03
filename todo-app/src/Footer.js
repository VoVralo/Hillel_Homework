import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <footer>
      <p>Total Tasks: {todos.length}</p>
    </footer>
  );
};

export default Footer;
