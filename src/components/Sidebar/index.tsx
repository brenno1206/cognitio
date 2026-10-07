'use client';

import { useSidebar } from '../SidebarContext';
import { navData } from '@/types/navigation';
import { SidebarItem } from '../SidebarItem';

import Icons from '@/assets/icons';

const SideBar = () => {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-primary text-brand-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-primary-light">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button
            onClick={closeSidebar}
            className="text-xl font-bold p-2 rounded = transition-colors cursor-pointer hover:text-gray-300"
          >
            {<Icons.Close />}
          </button>
        </div>

        <ul className="p-4">
          {navData.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
