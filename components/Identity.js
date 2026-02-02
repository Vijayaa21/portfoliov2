import React from 'react';
import { User } from 'lucide-react';

const Identity = () => (
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <h2 className="text-4xl font-bold italic">01 // Identity</h2>
      <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
        B.Tech in Electronics and Communication Engineering (University of Allahabad, GPA 8.4). Strong foundation in data structures, REST APIs, authentication and deployment. Based in Prayagraj, India.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Email', val: 'vijaya21m04@gmail.com' },
          { label: 'Location', val: 'Prayagraj, India' },
          { label: 'Degree', val: 'B.Tech, ECE (8.4 GPA)' },
        ].map(item => (
          <div key={item.label} className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-lg">
            <p className="text-[10px] text-gray-600 dark:text-gray-500 uppercase font-bold">{item.label}</p>
            <p className="text-gray-900 dark:text-white font-mono">{item.val}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="relative aspect-square bg-blue-600/5 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse" />
        <User size={120} className="text-black/20 dark:text-white/20 group-hover:text-blue-500/40 transition-colors duration-500" />
    </div>
  </div>
);

export default Identity;
