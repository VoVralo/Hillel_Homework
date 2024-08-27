import React, { useState } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <button onClick={toggleTheme}>
      Перемикати тему ({theme === 'light' ? 'Світла' : 'Темна'})
    </button>
  );
}

export default ThemeSwitcher;
