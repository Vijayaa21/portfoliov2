import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Database, 
  Brain, 
  Server, 
  Palette,
  GitBranch,
  Cloud
} from 'lucide-react';

const Arsenal = () => {
  const skills = [
    { 
      title: 'Languages', 
      icon: <Code2 size={24} />, 
      color: 'blue',
      list: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'] 
    },
    { 
      title: 'Frontend', 
      icon: <Palette size={24} />, 
      color: 'purple',
      list: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Zustand'] 
    },
    { 
      title: 'Backend', 
      icon: <Server size={24} />, 
      color: 'green',
      list: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'REST APIs', 'Socket.io'] 
    },
    { 
      title: 'Databases', 
      icon: <Database size={24} />, 
      color: 'amber',
      list: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma'] 
    },
    { 
      title: 'ML & AI', 
      icon: <Brain size={24} />, 
      color: 'pink',
      list: ['Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'Data Analysis'] 
    },
    { 
      title: 'DevOps & Tools', 
      icon: <Cloud size={24} />, 
      color: 'cyan',
      list: ['Git', 'Docker', 'Linux', 'Vercel', 'AWS', 'CI/CD'] 
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    green: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    pink: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end flex-wrap gap-4">
        <h2 className="text-4xl font-bold italic">02 // Arsenal</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-mono">
          Tools I use to bring ideas to life
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            key={skill.title} 
            className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-2xl space-y-4 hover:border-blue-500/30 transition-colors"
          >
            {/* Icon & Title */}
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg border ${colorClasses[skill.color]}`}>
                {skill.icon}
              </div>
              <h3 className="font-bold text-lg">{skill.title}</h3>
            </div>

            {/* Skills as Tags */}
            <div className="flex flex-wrap gap-2">
              {skill.list.map(s => (
                <span 
                  key={s} 
                  className="px-2 py-1 bg-black/5 dark:bg-white/10 rounded-md text-xs font-mono text-gray-700 dark:text-gray-300 hover:bg-blue-500/20 hover:text-blue-500 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Currently Learning */}
      <div className="pt-4">
        <div className="p-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="text-blue-500 font-semibold">Currently exploring:</span>{' '}
            Kubernetes, GraphQL, LangChain & Vector Databases
          </p>
        </div>
      </div>
    </div>
  );
};

export default Arsenal;
