import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Project data with level tags and links
const projects = [
  {
    title: 'Weather App',
    description: 'A simple weather application that fetches real-time weather data using OpenWeatherMap API. Features include city search, current conditions, and 5-day forecast display.',
    tech: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    level: 'beginner',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
    github: 'https://github.com/Vijayaa21/weather-app',
    demo: 'https://main--genuine-sherbet-a3ff96.netlify.app/',
  },
  {
    title: 'Fashion Fista',
    description: 'Interactive fashion e‑commerce app with virtual try‑on, theme customization, thrift marketplace and a real‑time Shopping Buddy boosting retention by 35%.',
    tech: ['React', 'Tailwind'],
    level: 'intermediate',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
    github: 'https://github.com/Vijayaa21/FashionFista',
   
  },
  {
    title: 'Pingify',
    description: 'Real-time chat app with JWT auth, typing indicators, presence, and read receipts. Built with React, Node, Express, MongoDB, Socket.io.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Socket.io', 'Tailwind'],
    level: 'advanced',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop',
    github: 'https://github.com/Vijayaa21/Pingify',
    demo: 'https://github.com/Vijayaa21/Pingify',
  },
  {
    title: 'Blabber',
    description: 'Full‑stack social platform with JWT auth, posts, comments, likes, recommendations; React Query state sync and Cloudinary media.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'React Query', 'Tailwind', 'MUI', 'REST'],
    level: 'advanced',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    github: 'https://github.com/Vijayaa21/Blabber',
    demo: 'https://blabber-front.onrender.com/',
  },
  {
    title: 'PDF Extraction',
    description: 'A document processing tool that extracts text, tables, and metadata from PDF files. Features OCR support, batch processing, and export to multiple formats.',
    tech: ['Python', 'PyPDF2', 'Tesseract', 'Flask'],
    level: 'beginner',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=400&fit=crop',
    github: 'https://github.com/Vijayaa21/pdf-dashboard',
    demo: 'https://pdf-extra-act.vercel.app/',
  },
  
  {
    title: 'Vibe Com',
    description: 'Full-featured e-commerce platform with product catalog, shopping cart, secure payments, order tracking, admin dashboard, and inventory management.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Stripe', 'Redux'],
    level: 'advanced',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    github: 'https://github.com/Vijayaa21/vibe-com-cart',
  },
  {
    title: 'Churn Prediction',
    description: 'Machine learning model to predict customer churn using historical data. Features data preprocessing, model training, evaluation metrics, and prediction API.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'Docker'],
    level: 'intermediate',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    github: 'https://github.com/Vijayaa21/Customer-Churn-Prediction',
  },
];

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

const Works = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-end">
      <h2 className="text-4xl font-bold italic">04 // Selected Works</h2>
      <p className="text-blue-500 font-mono text-sm">Sorted by Impact</p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </div>
);

export default Works;
