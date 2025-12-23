import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter,
  Code, 
  User, 
  Terminal, 
  Cpu, 
  Briefcase, 
  Layout,
  Mail,
  Trophy
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

// --- Configuration ---
export const SECTIONS = [
  { id: 'hero', label: 'Index', icon: <Terminal size={20} /> },
  { id: 'about', label: 'Identity', icon: <User size={20} /> },
  { id: 'skills', label: 'Arsenal', icon: <Cpu size={20} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
  { id: 'projects', label: 'Works', icon: <Layout size={20} /> },
  { id: 'achievements', label: 'Achievements', icon: <Trophy size={20} /> },
  { id: 'oss', label: 'Open Source', icon: <Github size={20} /> },
  { id: 'contact', label: 'Connect', icon: <Mail size={20} /> },
];

const Sidebar = ({ activeIndex, setActiveIndex, isDark, onToggleTheme }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-gray-50 dark:bg-[#0a0a0a] border-r border-black/10 dark:border-white/5 z-50 flex flex-col items-center lg:items-stretch py-8 transition-all">
      <div className="px-6 mb-12 hidden lg:block">
        <h2 className="text-xl font-bold tracking-tighter text-blue-500">
          VIJAYA<span className="text-gray-900 dark:text-white">.MISHRA</span>
        </h2>
        <p className="text-[10px] text-gray-700 dark:text-gray-500 font-mono mt-1 uppercase tracking-widest">Final Year / Class of 2026</p>
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </div>

      <nav className="flex-1 space-y-2 px-3 w-full">
        {SECTIONS.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setActiveIndex(index)}
            className={`w-full flex items-center group relative px-4 py-3 rounded-xl transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <span className="relative z-10">{section.icon}</span>
            <span className="hidden lg:block ml-4 font-medium text-sm relative z-10">{section.label}</span>
            {activeIndex === index && (
              <motion.div 
                layoutId="activePill"
                className="absolute inset-0 bg-blue-600/10 rounded-xl border-r-2 border-blue-500"
              />
            )}
          </button>
        ))}
      </nav>

      <div className="px-6 mt-auto hidden lg:flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <a href="https://github.com/Vijayaa21" target = "blank" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Github size={18} /></a>
          <a href="https://linkedin.com/in/vijaya-mishra21/" target = "blank" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Linkedin size={18} /></a>
          <a href="https://x.com/Vijayaa_21" target = "blank" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Twitter size={18} /></a>
          <a href="https://leetcode.com/u/vijayaa/" target = "blank" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Code size={18} /></a>
        </div>
        <div className="h-px bg-black/10 dark:bg-white/5 w-full" />
        <p className="text-[10px] text-gray-700 dark:text-gray-600 font-mono"></p>
      </div>
    </aside>
  );
};

export default Sidebar;
