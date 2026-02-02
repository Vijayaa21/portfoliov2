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
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold italic">02 // Arsenal</h2>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-mono">
          Tools I use to bring ideas to life
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            key={skill.title} 
            className="p-4 sm:p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-xl sm:rounded-2xl space-y-3 sm:space-y-4 hover:border-blue-500/30 transition-colors"
          >
            {/* Icon & Title */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`p-1.5 sm:p-2 rounded-lg border ${colorClasses[skill.color]}`}>
                <span className="[&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">{skill.icon}</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg">{skill.title}</h3>
            </div>

            {/* Skills as Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {skill.list.map(s => (
                <span 
                  key={s} 
                  className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black/5 dark:bg-white/10 rounded-md text-[10px] sm:text-xs font-mono text-gray-700 dark:text-gray-300 hover:bg-blue-500/20 hover:text-blue-500 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Currently Learning */}
      <div className="pt-2 sm:pt-4">
        <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-xl">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="text-blue-500 font-semibold">Currently exploring:</span>{' '}
            Kubernetes, GraphQL, LangChain & Vector Databases
          </p>
        </div>
      </div>
    </div>
  );
};

export default Arsenal;
