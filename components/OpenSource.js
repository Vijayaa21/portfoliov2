import React from 'react';
import { Github } from 'lucide-react';

const OpenSource = () => (
  <div className="space-y-8">
    <h2 className="text-4xl font-bold italic">07 // Open Source</h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
        <h3 className="font-bold inline-flex items-center gap-2"><Github size={18}/> GirlScript Summer of Code (GSSoC 2024)</h3>
        <p className="text-gray-700 dark:text-gray-400 mt-2">Contributed to 4+ repositories; top‑350 contributor. Focused on functionality, documentation and UI consistency.</p>
      </div>
      <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
        <h3 className="font-bold inline-flex items-center gap-2"><Github size={18}/> Hacktoberfest 2025</h3>
        <p className="text-gray-700 dark:text-gray-400 mt-2">Improved readability, optimized APIs and refined docs across Python/JavaScript repos through impactful PRs.</p>
      </div>
    </div>
  </div>
);

export default OpenSource;
