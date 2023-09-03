'use client';

import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function DarkModeToggle({ initialValue }: { initialValue: Theme }) {
  const [theme, setTheme] = useState(initialValue);

  useEffect(() => {
    if (theme) {
      document.cookie = `theme=${theme};path=/;`;
      document.querySelector('body').setAttribute('class', theme === "dark" ? "dark" : "");
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
  }, [theme]);

  return (
    <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="fixed z-50 flex items-center justify-center h-6 p-2 font-mono text-xs text-white bg-gray-800 rounded-full top-1 right-1">
      {theme === 'dark' ? 'light' : 'dark'}
    </button>
  );
}

export { DarkModeToggle };
