import React, { useState } from 'react';

// Список смайликів
const emojis = ['😀', '😃', '😄', '😁', '😆', '😂'];

const EmojiVoting = () => {
  // Створюємо стейт для лічильників кліків, ініціалізуємо їх нулями
  const [clickCounts, setClickCounts] = useState(emojis.reduce((acc, emoji) => {
    acc[emoji] = 0;
    return acc;
  }, {}));

  // Функція для обробки кліків по смайлику
  const handleEmojiClick = (emoji) => {
    setClickCounts((prevCounts) => ({
      ...prevCounts,
      [emoji]: prevCounts[emoji] + 1,
    }));
  };

  return (
    <div>
      <h1>Голосування за смайлики</h1>
      <div>
        {emojis.map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleEmojiClick(emoji)}
            style={{ fontSize: '2rem', margin: '0.5rem' }}
          >
            {emoji}
          </button>
        ))}
      </div>
      <div>
        {emojis.map((emoji) => (
          <p key={emoji}>
            {emoji}: {clickCounts[emoji]} голосів
          </p>
        ))}
      </div>
    </div>
  );
};

export default EmojiVoting;
