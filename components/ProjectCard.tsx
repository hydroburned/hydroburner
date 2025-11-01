import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import ArrowRightIcon from './icons/ArrowRightIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={`/project/${project.id}`}
      onDragStart={(e) => e.preventDefault()}
      className="group block overflow-hidden rounded-2xl border border-white/40 dark:border-white/20 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg transition-all duration-300 hover:border-white/60 dark:hover:border-white/30 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40"
    >
      <div className="overflow-hidden aspect-video">
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{project.tagline}</p>
        
        {project.impactMetrics && project.impactMetrics.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-500/20 grid grid-cols-2 gap-4">
            {project.impactMetrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl font-bold font-heading text-gray-900 dark:text-white">{metric.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
          View Case Study
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;