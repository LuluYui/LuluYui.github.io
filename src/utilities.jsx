import { useState, useEffect } from 'react';

export function useDarkMode() {
  // Initialize state from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to apply the class to <html>
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', darkMode);
    root.style.colorScheme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  // Effect to listen for OS theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Always sync with the system preference. When the system theme changes,
      // we update the state and clear any manual override from localStorage.
      setDarkMode(e.matches);
      localStorage.removeItem('theme');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // When user manually toggles, we save their preference
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  }

  return [darkMode, toggleDarkMode];
}
