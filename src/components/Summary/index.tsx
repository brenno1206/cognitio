import React from 'react';

export type SummaryItem = {
  id: string;
  label: string;
  level: 'section' | 'subsection' | 'subsubsection';
};

export const Summary = ({ items }: { items: SummaryItem[] }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl border border-black/10 dark:border-white/10 mb-8">
      <h4 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wider">
        Sumário
      </h4>
      <nav className="flex flex-col gap-2">
        {items.map((item) => {
          const ml =
            item.level === 'subsection'
              ? 'ml-4'
              : item.level === 'subsubsection'
                ? 'ml-8'
                : '';

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${ml} text-foreground/70 hover:text-primary transition-colors font-medium text-base`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
