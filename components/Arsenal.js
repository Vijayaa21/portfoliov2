import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Cpu as Processor } from 'lucide-react';

const Arsenal = () => {
  const skills = [
    { title: 'Languages', icon: <Code />, list: ['Python', 'C++', 'JavaScript', 'SQL'] },
    { title: 'Frameworks', icon: <Layout />, list: ['Django', 'Node.js', 'Express.js', 'React.js', 'Next.js', 'FastAPI', 'Tailwind CSS', 'React Query', 'Zustand', 'Socket.io'] },
    { title: 'Databases & Tools', icon: <Database />, list: ['MongoDB', 'Git', 'GitHub', 'Cloudinary', 'JWT', 'Cookies', 'Linux (Ubuntu)', 'Docker', 'Docker Compose'] },
    { title: 'Concepts', icon: <Processor />, list: ['DSA', 'REST APIs', 'AuthN/AuthZ', 'Deployment'] },
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold italic">02 // Arsenal</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={skill.title} 
            className="p-8 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-3xl space-y-6"
          >
            <div className="text-blue-500">{skill.icon}</div>
            <h3 className="font-bold text-xl">{skill.title}</h3>
            <ul className="space-y-2">
              {skill.list.map(s => <li key={s} className="text-sm text-gray-700 dark:text-gray-500 font-mono">• {s}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Arsenal;
