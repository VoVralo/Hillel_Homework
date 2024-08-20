import React, { useState } from 'react';

const Emoji = ({ emoji, onVote }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    onVote(emoji);
  };

  return (
    <div style={{ margin: '10px' }}>
      <span style={{ fontSize: '24px' }}>{emoji}</span>
      <button onClick={handleClick} style={{ marginLeft: '10px' }}>Vote</button>
      <span style={{ marginLeft: '10px' }}>Votes: {count}</span>
    </div>
  );
};

export default Emoji;
