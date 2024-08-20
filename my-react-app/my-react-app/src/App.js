document.addEventListener('DOMContentLoaded', () => {
  const emojiElements = document.querySelectorAll('.emoji');
  const showResultsButton = document.getElementById('showResults');
  const clearResultsButton = document.getElementById('clearResults');
  const resultDisplay = document.getElementById('resultDisplay');


  let votes = JSON.parse(localStorage.getItem('votes')) || {};

  function updateEmojiCounts() {
      emojiElements.forEach(el => {
          const emoji = el.getAttribute('data-emoji');
          el.textContent = emoji + (votes[emoji] ? ` (${votes[emoji]})` : '');
      });
  }

  updateEmojiCounts();

  emojiElements.forEach(el => {
      el.addEventListener('click', () => {
          const emoji = el.getAttribute('data-emoji');
          votes[emoji] = (votes[emoji] || 0) + 1;
          localStorage.setItem('votes', JSON.stringify(votes));
          updateEmojiCounts();
      });
  });

  showResultsButton.addEventListener('click', () => {
      const sortedEmojis = Object.entries(votes).sort((a, b) => b[1] - a[1]);
      if (sortedEmojis.length > 0) {
          const [topEmoji, count] = sortedEmojis[0];
          resultDisplay.textContent = `The most voted emoji is ${topEmoji} with ${count} votes.`;
      } else {
          resultDisplay.textContent = 'No votes yet.';
      }
  });

  clearResultsButton.addEventListener('click', () => {
      localStorage.removeItem('votes');
      votes = {};
      updateEmojiCounts();
      resultDisplay.textContent = '';
  });
});
