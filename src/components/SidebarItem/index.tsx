'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavItem } from '@/types/navigation';
import Icons from '@/assets/icons';

export const SidebarItem = ({ item }: { item: NavItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.subItems && item.subItems.length > 0;

  return (
    <li className="flex flex-col mb-1 text-brand-white">
      <div className="flex items-center justify-between p-2 rounded transition-colors hover:bg-primary-light">
        <Link href={item.url} className="grow font-medium block">
          {item.label}
        </Link>

        {hasChildren && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            className="ml-2 font-bold p-1 w-8 flex items-center justify-center rounded transition-colors cursor-pointer"
          >
            {isExpanded ? <Icons.OpenFolder /> : <Icons.Folder />}
          </button>
        )}
      </div>

      {hasChildren && isExpanded && (
        <ul className="ml-4 border-l-2 border-brand-white/30 pl-2 mt-1">
          {item.subItems!.map((subItem, index) => (
            <SidebarItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};
