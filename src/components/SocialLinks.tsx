import React from 'react';
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import type { ThemeMode } from '../hooks/useTheme';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const themeStyles: Record<ThemeMode, {
  container: string;
  link: string;
  divider: string;
}> = {
  light: {
    container: 'bg-white/70 backdrop-blur-md shadow-lg shadow-gray-100/50',
    link: 'hover:bg-gray-50/90 text-gray-800 hover:text-gray-900',
    divider: 'divide-gray-100'
  },
  dark: {
    container: 'bg-gray-900/70 backdrop-blur-md shadow-lg shadow-black/20',
    link: 'hover:bg-gray-800/90 text-gray-300 hover:text-white',
    divider: 'divide-gray-800/50'
  },
  blue: {
    container: 'bg-[#1e3a5f]/80 backdrop-blur-md shadow-lg shadow-[#0a1929]/30',
    link: 'hover:bg-[#2b4f7d]/90 text-[#60a5fa] hover:text-[#93c5fd]',
    divider: 'divide-[#2b4f7d]/50'
  }
};

function SocialLink({ href, icon, label }: SocialLinkProps) {
  const { theme } = useTheme();
  const styles = themeStyles[theme];
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 p-4 rounded-xl ${styles.link} transition-all duration-200 hover:scale-[1.02] hover:shadow-sm`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

export default function SocialLinks() {
  const { theme } = useTheme();
  const styles = themeStyles[theme];
  
  return (
    <div className={`rounded-2xl ${styles.container} p-2 transition-all duration-300 ring-1 ring-white/10`}>
      <div className={`flex flex-col divide-y ${styles.divider}`}>
        <SocialLink
          href="https://github.com/bluedragon320"
          icon={<Github className="w-5 h-5" />}
          label="Follow on GitHub"
        />
        <SocialLink
          href="https://x.com/bluedragon320"
          icon={<Twitter className="w-5 h-5" />}
          label="Follow on Twitter"
        />
        <SocialLink
          href="https://linkedin.com"
          icon={<Linkedin className="w-5 h-5" />}
          label="Connect on LinkedIn"
        />
        <SocialLink
          href="mailto:contactbluedragon320@gmail.com"
          icon={<Mail className="w-5 h-5" />}
          label="Send me an email"
        />
        {/* <SocialLink
          href="https://example.com"
          icon={<Globe className="w-5 h-5" />}
          label="Visit my website"
        /> */}
      </div>
    </div>
  );
}