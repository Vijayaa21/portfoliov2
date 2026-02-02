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
    className="group relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5"
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
          <Folder size={48} className="text-blue-500/30" />
        </div>
      )}
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">{project.title}</h3>
        <LevelBadge level={project.level} />
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map(t => (
          <span key={t} className="px-2 py-1 bg-black/5 dark:bg-white/10 rounded-md text-[10px] font-mono text-gray-600 dark:text-gray-400">
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="px-2 py-1 text-[10px] font-mono text-gray-500">+{project.tech.length - 4} more</span>
        )}
      </div>

      {/* Stats & Links */}
      <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
        {/* Stats */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          {project.stars > 0 && (
            <span className="inline-flex items-center gap-1">
              <Star size={12} /> {project.stars}
            </span>
          )}
          {project.forks > 0 && (
            <span className="inline-flex items-center gap-1">
              <GitFork size={12} /> {project.forks}
            </span>
          )}
          {project.language && (
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              {project.language}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400 hover:text-blue-500"
            >
              <Github size={18} />
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400 hover:text-blue-500"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Works = ({ githubProjects = [] }) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end flex-wrap gap-4">
        <div>
          <h2 className="text-4xl font-bold italic">04 // Selected Works</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Projects I've built and contributed to</p>
        </div>
        <div className="flex items-center gap-4">
          {githubProjects.length > 0 && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-xs font-mono">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Auto-synced from GitHub
            </span>
          )}
        </div>
      </div>

      {githubProjects.length === 0 ? (
        <div className="text-center py-20 bg-black/5 dark:bg-white/5 rounded-2xl border border-dashed border-black/10 dark:border-white/10">
          <Folder size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-lg font-semibold mb-2">No projects found</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
            Add the <code className="bg-blue-500/20 text-blue-500 px-2 py-0.5 rounded">portfolio-project</code> topic to your GitHub repos to display them here.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Works;
