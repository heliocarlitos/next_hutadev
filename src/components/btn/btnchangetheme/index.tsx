'use client';

import { useEffect, useState } from 'react';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import './index.css';
export function BtnChangeTheme() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDarkMode(true);
    else if (savedTheme === 'light') setDarkMode(false);
    else setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    if (darkMode) document.documentElement.classList.remove('light');
    else document.documentElement.classList.add('light');
  }, [darkMode]);

  const toggleTheme = () => {
    if (darkMode === null) return;
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    window.navigator.vibrate?.(30);
  };

  return (
    
    <div className="btnchangetheme">
      <button aria-label="Mudar tema" onClick={toggleTheme} type="button">
        <span className={`icon sun ${darkMode ? 'exit' : 'enter'}`} aria-hidden>
          <IoMdMoon />
        </span>
        <span className={`icon moon ${darkMode ? 'enter' : 'exit'}`} aria-hidden>
          <IoMdSunny />
        </span>
      </button>
    </div>
  );
}
