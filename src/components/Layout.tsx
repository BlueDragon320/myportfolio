import React from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import type { ThemeMode } from '../hooks/useTheme';

interface LayoutProps {
  children: React.ReactNode;
}

const themeStyles: Record<ThemeMode, string> = {
  light: 'bg-white text-black',
  dark: 'bg-black text-white',
  blue: 'bg-[#0a1929] text-[#60a5fa]'
};

const ThemeIcons: Record<ThemeMode, React.ComponentType> = {
  light: Sun,
  dark: Moon,
  blue: Sparkles
};

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const Icon = ThemeIcons[theme];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeStyles[theme]}`}>
      <div className="max-w-[420px] mx-auto px-6 py-12">
        <nav className="flex justify-between items-center mb-12">
          <div className="text-2xl font-bold tracking-tighter">: )</div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === 'blue' 
                ? 'hover:bg-[#172554]' 
                : theme === 'dark' 
                  ? 'hover:bg-gray-800' 
                  : 'hover:bg-gray-100'
            } transition-colors`}
            aria-label="Toggle theme"
          >
            <Icon className="w-5 h-5" />
          </button>
        </nav>
        {children}
        <footer className="mt-12 text-center text-sm opacity-60">
          Feel free to DM
        </footer>
      </div>
    </div>
  );
}