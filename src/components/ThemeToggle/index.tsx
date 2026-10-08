'use client';

import { useEffect, useState } from 'react';
import Icons from '@/assets/icons';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;

      if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      setMounted(true);
    };
    queueMicrotask(initializeTheme);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={toggleTheme}
      className="text-brand-white text-2xl p-2 rounded-full hover:bg-black/10 transition-colors cursor-pointer w-10 h-10 flex items-center justify-center"
      title={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      {isDark ? <Icons.Light size={24} /> : <Icons.Dark size={24} />}
    </button>
  );
}
