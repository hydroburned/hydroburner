import React from 'react';
import { LiveProject } from '../types';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface LiveProjectCardProps {
  project: LiveProject;
}

const LiveProjectCard: React.FC<LiveProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-white/40 dark:border-white/20 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-black text-sm font-medium">
            <ExternalLinkIcon className="w-4 h-4" />
            <span>View Live Site</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400 h-16">{project.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2.5 py-1 rounded-full font-medium">
                {project.domain}
            </span>
            <span className="text-xs bg-gray-200 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-full font-medium">
                Built on {project.platform}
            </span>
        </div>
      </div>
    </a>
  );
};

export default LiveProjectCard;
