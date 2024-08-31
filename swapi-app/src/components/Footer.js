import React from 'react';
import { useDispatch } from 'react-redux';
import { clearTodo } from '../redux/actions';

const Footer = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearTodo());
  };

  return (
    <footer>
      <button onClick={handleClear}>Clear TODO</button>
    </footer>
  );
};

export default Footer;
