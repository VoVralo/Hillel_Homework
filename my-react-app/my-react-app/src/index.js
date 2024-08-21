import React from 'react';
import ReactDOM from 'react-dom';
import EmojiVote from './components/EmojiVote';
import './index.css'; // Якщо у вас є CSS для стилів

ReactDOM.render(
  <React.StrictMode>
    <EmojiVote />
  </React.StrictMode>,
  document.getElementById('root')
);
