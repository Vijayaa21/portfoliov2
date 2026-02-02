import React from 'react';
import { User, Coffee, GraduationCap } from 'lucide-react';

const Identity = () => (
  <div className="grid lg:grid-cols-3 gap-12 items-center">
    <div className="lg:col-span-2 space-y-6">
      <h2 className="text-4xl font-bold italic">01 // Identity</h2>
      
      {/* Personal Introduction */}
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Hey there! I'm <span className="text-blue-500 font-semibold">Vijaya</span> — a curious builder who finds joy in turning ideas into working products. Whether it's crafting seamless user experiences or training models to predict the unpredictable, I'm always up for a good challenge.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
          Currently wrapping up my B.Tech in Electronics & Communication at the University of Allahabad (yep, the historic one!). But somewhere between circuits and signals, I fell in love with code — and there was no going back.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
          When I'm not debugging at 2 AM, you'll find me exploring open-source projects, experimenting with new frameworks, or convincing myself that "just one more feature" won't take long (spoiler: it always does).
        </p>
      </div>

      {/* Fun Facts */}
      <div className="flex flex-wrap gap-3 pt-2">
        <span className="inline-flex items-center gap-2 px-3 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-600 dark:text-amber-400 text-sm">
          <Coffee size={14} /> Fueled by chai
        </span>
        <span className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-sm">
          <GraduationCap size={14} /> Always learning
        </span>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Email', val: 'vijaya21m04@gmail.com' },
          { label: 'Location', val: 'Prayagraj, India' },
          { label: 'Degree', val: 'B.Tech, ECE (8.4 GPA)' },
          { label: 'Status', val: 'Open to opportunities' },
        ].map(item => (
          <div key={item.label} className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-lg">
            <p className="text-[10px] text-gray-600 dark:text-gray-500 uppercase font-bold">{item.label}</p>
            <p className="text-gray-900 dark:text-white font-mono text-sm">{item.val}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className="relative w-64 h-64 lg:w-100 lg:h-100 bg-blue-600/5 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse" />
        <User size={80} className="text-black/20 dark:text-white/20 group-hover:text-blue-500/40 transition-colors duration-500" />
      </div>
    </div>
  </div>
);

export default Identity;
