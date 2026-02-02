import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Folder } from 'lucide-react';

// Level badge component
const LevelBadge = ({ level }) => {
  const config = {
    beginner: { label: 'Beginner', style: 'bg-green-500/20 text-green-500 border-green-500/30' },
    intermediate: { label: 'Intermediate', style: 'bg-amber-500/20 text-amber-500 border-amber-500/30' },
    advanced: { label: 'Advanced', style: 'bg-red-500/20 text-red-500 border-red-500/30' },
  };

  const { label, style } = config[level] || config.intermediate;

  return (
    <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${style}`}>
      {label}
    </span>
  );
};

// Project card component
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5"
  >
    {/* Image */}
    <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 overflow-hidden relative">
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Folder size={40} className="sm:w-12 sm:h-12 text-blue-500/30" />
        </div>
      )}
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    {/* Content */}
    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base sm:text-xl font-bold group-hover:text-blue-500 transition-colors line-clamp-1">{project.title}</h3>
        <LevelBadge level={project.level} />
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-2">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {project.tech.slice(0, 3).map(t => (
          <span key={t} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black/5 dark:bg-white/10 rounded-md text-[9px] sm:text-[10px] font-mono text-gray-600 dark:text-gray-400">
            {t}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-mono text-gray-500">+{project.tech.length - 3}</span>
        )}
      </div>

      {/* Stats & Links */}
      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-black/5 dark:border-white/5">
        {/* Stats */}
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
          {project.stars > 0 && (
            <span className="inline-flex items-center gap-1">
              <Star size={10} className="sm:w-3 sm:h-3" /> {project.stars}
            </span>
          )}
          {project.forks > 0 && (
            <span className="inline-flex items-center gap-1">
              <GitFork size={10} className="sm:w-3 sm:h-3" /> {project.forks}
            </span>
          )}
          {project.language && (
            <span className="inline-flex items-center gap-1 hidden sm:inline-flex">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              {project.language}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400 hover:text-blue-500"
            >
              <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400 hover:text-blue-500"
            >
              <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Works = ({ githubProjects = [] }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold italic">04 // Selected Works</h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Projects I've built and contributed to</p>
        </div>
        <div className="flex items-center gap-4">
          {githubProjects.length > 0 && (
            <span className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-[10px] sm:text-xs font-mono">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
              Auto-synced from GitHub
            </span>
          )}
        </div>
      </div>

      {githubProjects.length === 0 ? (
        <div className="text-center py-12 sm:py-20 bg-black/5 dark:bg-white/5 rounded-xl sm:rounded-2xl border border-dashed border-black/10 dark:border-white/10">
          <Folder size={40} className="sm:w-12 sm:h-12 mx-auto text-gray-400 mb-3 sm:mb-4" />
          <p className="text-base sm:text-lg font-semibold mb-2">No projects found</p>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm max-w-md mx-auto px-4">
            Add the <code className="bg-blue-500/20 text-blue-500 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs">portfolio-project</code> topic to your GitHub repos to display them here.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {githubProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Works;
