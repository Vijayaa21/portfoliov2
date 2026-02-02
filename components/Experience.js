import React from 'react';
import { motion } from 'framer-motion';
import { Github, Briefcase, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Frontend Engineer Intern',
    company: 'Jibrin Store',
    companyUrl: null,
    period: 'May 2025 — July 2025',
    location: 'Remote',
    description: 'Built tailored frontend solutions that directly impacted business growth and user satisfaction.',
    highlights: [
      'Delivered frontend solutions for 5+ clients, boosting conversions by 25%',
      'Designed responsive UIs in React + TailwindCSS, improving satisfaction by 30%',
      'Optimized API integrations and implemented mobile-first layouts',
    ],
    tech: ['React.js', 'JavaScript', 'TailwindCSS', 'REST APIs'],
  },
  {
    type: 'open-source',
    title: 'Open Source Contributor & Project Admin',
    company: 'GirlScript Summer of Code',
    companyUrl: 'https://gssoc.girlscript.tech',
    period: 'GSSoC 2024 & 2025',
    location: 'Virtual',
    description: 'Contributed as a top developer and now mentoring the next generation as Project Admin.',
    highlights: [
      'Top 350 contributor in GSSoC 2024 across 4+ repositories',
      'Project Admin in GSSoC 2025 reviewing PRs and guiding contributors',
      'Focused on functionality improvements, documentation & UI consistency',
    ],
    tech: ['React', 'Node.js', 'Python', 'Git'],
    badge: 'Top 350',
  },
  {
    type: 'open-source',
    title: 'Open Source Contributor',
    company: 'Hacktoberfest',
    companyUrl: 'https://hacktoberfest.com',
    period: 'October 2025',
    location: 'Virtual',
    description: 'Contributed quality PRs to earn the official Hacktoberfest completion badge.',
    highlights: [
      'Improved code readability and optimized APIs across multiple repos',
      'Refined documentation through impactful pull requests',
      'Earned official Hacktoberfest completion badge',
    ],
    tech: ['Python', 'JavaScript', 'Documentation'],
    badge: 'Completed',
  },
];

// Tag component for experience type
const ExperienceTag = ({ type }) => {
  const config = {
    work: {
      icon: <Briefcase size={12} />,
      label: 'Work Experience',
      style: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    },
    'open-source': {
      icon: <Github size={12} />,
      label: 'Open Source',
      style: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    },
  };

  const { icon, label, style } = config[type];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${style}`}>
      {icon} {label}
    </span>
  );
};

// Experience Card Component
const ExperienceCard = ({ experience, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="relative group"
  >
    {/* Timeline connector */}
    {index !== experiences.length - 1 && (
      <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500/30 to-transparent" />
    )}

    <div className="flex gap-4">
      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
          experience.type === 'work' 
            ? 'bg-blue-500/10 border-blue-500/30 text-blue-500' 
            : 'bg-purple-500/10 border-purple-500/30 text-purple-500'
        }`}>
          {experience.type === 'work' ? <Briefcase size={20} /> : <Github size={20} />}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group-hover:shadow-lg group-hover:shadow-blue-500/5">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              {experience.title}
              {experience.badge && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 text-amber-500 text-[10px] font-bold rounded-full">
                  <Award size={10} /> {experience.badge}
                </span>
              )}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-blue-500 font-semibold">{experience.company}</span>
              {experience.companyUrl && (
                <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
          <ExperienceTag type={experience.type} />
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} /> {experience.period}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} /> {experience.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {experience.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="text-blue-500 mt-1">▹</span>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5 dark:border-white/5">
          {experience.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-black/5 dark:bg-white/10 rounded-md text-xs font-mono text-gray-600 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Experience = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-end flex-wrap gap-4">
      <h2 className="text-4xl font-bold italic">03 // Experience</h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-mono">
        Where I've made an impact
      </p>
    </div>

    {/* Timeline */}
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <ExperienceCard key={exp.title + exp.company} experience={exp} index={index} />
      ))}
    </div>
  </div>
);

export default Experience;
