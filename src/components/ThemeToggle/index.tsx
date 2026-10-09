'use client';

import Icons from '@/assets/icons';
import { useTheme } from '../ThemeContext';

export default function ThemeToggle() {
  const { isDark, mounted, toggleTheme } = useTheme();

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={toggleTheme}
      className="text-brand-white text-2xl p-2 rounded-full hover:bg-black/10 transition-colors cursor-pointer w-10 h-10 flex items-center justify-center shrink-0"
      title={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      {isDark ? <Icons.Light size={24} /> : <Icons.Dark size={24} />}
    </button>
  );
}
