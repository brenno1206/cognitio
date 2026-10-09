'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../ThemeContext';
import Icons from '@/assets/icons';

type CodeAreaProps = {
  code: string;
  language?: string;
};

export const CodeArea = ({ code, language = 'javascript' }: CodeAreaProps) => {
  const [copied, setCopied] = useState(false);
  const { isDark, mounted } = useTheme();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!mounted) {
    return (
      <div className="h-32 w-full animate-pulse bg-[#eff1f5] dark:bg-[#282c34] rounded-xl my-8"></div>
    );
  }

  return (
    <div className="relative group my-8 rounded-xl overflow-hidden border border-black/5 dark:border-none bg-[#eff1f5] dark:bg-[#282c34] shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-[#e6e9ef] dark:bg-[#21252b] text-foreground/60 dark:text-gray-400 text-xs uppercase font-bold tracking-wider border-b border-black/5 dark:border-none">
        <span>{language}</span>
        <button
          onClick={handleCopy}
          className="hover:text-gray-600 transition-colors cursor-pointer"
        >
          {copied ? <Icons.Copied size={20} /> : <Icons.Copy size={20} />}
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={isDark ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          fontSize: '0.9rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
