import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      aria-label="Toggle theme"
      onClick={onToggle}
      className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
    >
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
      <span className="font-mono">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ThemeToggle;
