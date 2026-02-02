import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements = () => (
  <div className="space-y-8">
    <h2 className="text-4xl font-bold italic">06 // Achievements</h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
        <h3 className="font-bold inline-flex items-center gap-2"><Trophy size={18}/> GDG on Campus Organizer (JKIAPT)</h3>
        <p className="text-gray-700 dark:text-gray-400 mt-2">Selected among top 400 students in India to lead developer initiatives and community events.</p>
      </div>
      <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
        <h3 className="font-bold inline-flex items-center gap-2"><Trophy size={18}/> Myntra WeForShe Hackathon Semifinalist</h3>
        <p className="text-gray-700 dark:text-gray-400 mt-2">Ranked top 70 of 30,000+ teams; built eco‑friendly fashion solutions with interactive prototypes.</p>
      </div>
      <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
        <h3 className="font-bold inline-flex items-center gap-2"><Trophy size={18}/> SheCodes Scholar</h3>
        <p className="text-gray-700 dark:text-gray-400 mt-2">Selected among top 400 students in India to lead developer initiatives and community events.</p>
      </div>
    </div>
  </div>
);

export default Achievements;
