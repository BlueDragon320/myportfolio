import React from 'react';
import { ExternalLink } from 'lucide-react';
import useTheme from '../hooks/useTheme';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  const { isDark } = useTheme();

  return (
    <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'} group hover:scale-[1.02] transition-all cursor-pointer`}>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{description}</p>
      <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}