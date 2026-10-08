'use client';

import Link from 'next/link';
import { useSidebar } from '../SidebarContext';
import Icons from '@/assets/icons';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="p-3 bg-primary flex items-center">
      <button
        onClick={toggleSidebar}
        className="text-brand-white text-3xl p-2 hover:text-gray-300 transition-colors shrink-0 cursor-pointer"
        title="Abrir Menu"
      >
        {<Icons.OpenSidebarIcon size={32} />}
      </button>

      <div className="grow text-center pr-10">
        <Link
          href="/"
          className="text-brand-white text-5xl md:text-4xl font-thin tracking-tighter leading-none"
        >
          Cognitio
        </Link>
        <h4 className="text-brand-white font-bold md:text-2xl tracking-wide">
          Conhecimento e Saber
        </h4>
      </div>
      <div className="w-12 flex justify-end">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
