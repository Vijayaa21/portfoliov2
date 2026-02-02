import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, Code2, Star, Medal } from 'lucide-react';

const achievements = [
  {
    icon: <Users size={24} />,
    title: 'GDG on Campus Organizer',
    organization: 'JKIAPT',
    description: 'Selected among top 400 students in India to lead developer initiatives and community events.',
    color: 'blue',
    highlight: 'Top 400 in India',
  },
  {
    icon: <Trophy size={24} />,
    title: 'Myntra WeForShe Hackathon',
    organization: 'Semifinalist',
    description: 'Ranked top 70 of 30,000+ teams; built eco-friendly fashion solutions with interactive prototypes.',
    color: 'purple',
    highlight: 'Top 70 / 30,000+',
  },
  {
    icon: <Award size={24} />,
    title: 'SheCodes Scholar',
    organization: 'SheCodes Foundation',
    description: 'Awarded scholarship for demonstrating exceptional coding skills and commitment to tech.',
    color: 'pink',
    highlight: 'Scholarship Recipient',
  },
  {
    icon: <Code2 size={24} />,
    title: 'GSSoC Top Contributor',
    organization: 'GirlScript Summer of Code',
    description: 'Ranked among top 350 contributors out of thousands of participants worldwide.',
    color: 'amber',
    highlight: 'Top 350 Contributor',
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-500',
    highlight: 'bg-blue-500/20 text-blue-500',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-500',
    highlight: 'bg-purple-500/20 text-purple-500',
  },
  pink: {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    text: 'text-pink-500',
    highlight: 'bg-pink-500/20 text-pink-500',
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-500',
    highlight: 'bg-amber-500/20 text-amber-500',
  },
};

const AchievementCard = ({ achievement, index }) => {
  const colors = colorClasses[achievement.color];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-2xl hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5"
    >
      {/* Icon & Highlight */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border ${colors.text}`}>
          {achievement.icon}
        </div>
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${colors.highlight}`}>
          {achievement.highlight}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold mb-1 group-hover:text-blue-500 transition-colors">
        {achievement.title}
      </h3>
      <p className={`text-sm font-medium mb-3 ${colors.text}`}>
        {achievement.organization}
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {achievement.description}
      </p>
    </motion.div>
  );
};

const Achievements = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-end flex-wrap gap-4">
      <div>
        <h2 className="text-4xl font-bold italic">05 // Achievements</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Recognition and milestones along the way</p>
      </div>
      <div className="flex items-center gap-2 text-amber-500">
        <Medal size={20} />
        <span className="text-sm font-mono">{achievements.length} Achievements</span>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <AchievementCard key={achievement.title} achievement={achievement} index={index} />
      ))}
    </div>

    {/* Stats Banner */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl"
    >
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
        <div>
          <p className="text-3xl font-bold text-blue-500">30K+</p>
          <p className="text-sm text-gray-500">Competitors Beaten</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-500">Top 400</p>
          <p className="text-sm text-gray-500">In India (GDG)</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-pink-500">4+</p>
          <p className="text-sm text-gray-500">Major Awards</p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default Achievements;
