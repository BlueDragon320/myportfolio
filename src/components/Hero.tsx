import React from 'react';
import useTheme from '../hooks/useTheme';

export default function Hero() {
  const { theme } = useTheme();
  
  return (
    <div className="space-y-4">
      <h1 className={`text-4xl font-bold tracking-tight ${
        theme === 'blue' ? 'text-white' : ''
      }`}>
        Hello, I'm Blue Dragon
      </h1>
      <p className={`text-lg leading-relaxed ${
        theme === 'blue'
          ? 'text-[#60a5fa]/80'
          : 'opacity-80'
      }`}>
        Currently studying for a bachelor's degree in computer applications, with a keen interest in technology, Linux, and coding. Enjoys experimenting with Linux setups and optimizing system performance. Also love Plaes.
      </p>
    </div>
  );
}