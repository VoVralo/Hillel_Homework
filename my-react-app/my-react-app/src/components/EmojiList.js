import React, { useState } from 'react';
import Emoji from './Emoji';

const EmojiList = () => {
  const [votes, setVotes] = useState({});

  const handleVote = (emoji) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [emoji]: (prevVotes[emoji] || 0) + 1
    }));
  };

  const emojis = ['😀', '😂', '😍', '😎', '😢'];

  return (
    <div>
      {emojis.map((emoji) => (
        <Emoji key={emoji} emoji={emoji} onVote={handleVote} />
      ))}
      <div>
        <h2>Total Votes:</h2>
        <ul>
          {Object.entries(votes).map(([emoji, count]) => (
            <li key={emoji}>{emoji}: {count}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmojiList;
