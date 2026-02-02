import React from 'react';
import { User, Coffee, GraduationCap } from 'lucide-react';

const Identity = () => (
  <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold italic">01 // Identity</h2>
      
      {/* Personal Introduction */}
      <div className="space-y-3 sm:space-y-4">
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          Hey there! I'm <span className="text-blue-500 font-semibold">Vijaya</span> — a curious builder who finds joy in turning ideas into working products. Whether it's crafting seamless user experiences or training models to predict the unpredictable, I'm always up for a good challenge.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          Currently wrapping up my B.Tech in Electronics & Communication at the University of Allahabad (yep, the historic one!). But somewhere between circuits and signals, I fell in love with code — and there was no going back.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          When I'm not debugging at 2 AM, you'll find me exploring open-source projects, experimenting with new frameworks, or convincing myself that "just one more feature" won't take long (spoiler: it always does).
        </p>
      </div>

      {/* Fun Facts */}
      <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-600 dark:text-amber-400 text-xs sm:text-sm">
          <Coffee size={12} className="sm:w-3.5 sm:h-3.5" /> Fueled by chai
        </span>
        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">
          <GraduationCap size={12} className="sm:w-3.5 sm:h-3.5" /> Always learning
        </span>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        {[
          { label: 'Email', val: 'vijaya21m04@gmail.com' },
          { label: 'Location', val: 'Prayagraj, India' },
          { label: 'Degree', val: 'B.Tech, ECE (8.4 GPA)' },
          { label: 'Status', val: 'Open to opportunities' },
        ].map(item => (
          <div key={item.label} className="p-3 sm:p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-lg">
            <p className="text-[9px] sm:text-[10px] text-gray-600 dark:text-gray-500 uppercase font-bold">{item.label}</p>
            <p className="text-gray-900 dark:text-white font-mono text-xs sm:text-sm truncate">{item.val}</p>
          </div>
        ))}
      </div>
    </div>
    {/* Circle User - Hidden on mobile and tablet, visible only on large screens */}
    <div className="hidden lg:flex items-center justify-center">
      <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-blue-600/5 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse" />
        <User size={80} className="text-black/20 dark:text-white/20 group-hover:text-blue-500/40 transition-colors duration-500" />
      </div>
    </div>
  </div>
);

export default Identity;
