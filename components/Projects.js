import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Level badge component
const LevelBadge = ({ level }) => {
  const styles = {
    beginner: 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30',
    intermediate: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30',
    advanced: 'bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30',
  };

  return (
    <span className={`absolute top-4 right-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${styles[level]}`}>
      {level}
    </span>
  );
};

// Project card component
const ProjectCard = ({ project }) => (
  <div className={`group relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden ${project.fullWidth ? 'md:col-span-2' : ''}`}>
    <LevelBadge level={project.level} />
    <div className="aspect-video bg-black/10 dark:bg-white/10 overflow-hidden">
      {project.image && (
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-[10px] font-mono">{t}</span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        {project.github && (
          <a className="inline-flex items-center gap-1 hover:underline hover:text-blue-500 transition-colors" href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={14}/> Code
          </a>
        )}
        {project.demo && (
          <a className="inline-flex items-center gap-1 hover:underline hover:text-blue-500 transition-colors" href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={14}/> Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Works = ({ githubProjects = [] }) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end flex-wrap gap-4">
        <h2 className="text-4xl font-bold italic">04 // Selected Works</h2>
        <div className="flex items-center gap-4">
          {githubProjects.length > 0 && (
            <span className="text-green-500 font-mono text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Auto-synced from GitHub
            </span>
          )}
          <p className="text-blue-500 font-mono text-sm">{githubProjects.length} Projects</p>
        </div>
      </div>
      {githubProjects.length === 0 ? (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          <p className="text-lg mb-2">No projects found</p>
          <p className="text-sm">Add the <code className="bg-black/10 dark:bg-white/10 px-2 py-1 rounded">portfolio-project</code> topic to your GitHub repos to display them here.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {githubProjects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Works;
