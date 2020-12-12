import React from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = React.useState('dark');

  const colorMode = theme === 'dark' ? 'light' : 'dark';

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorMode);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorMode]);

  return { setTheme, colorMode };
}
