import React from 'react';
import { Github } from 'lucide-react';

// Tag component for experience type
const ExperienceTag = ({ type }) => {
  const styles = {
    work: 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30',
    'open-source': 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30',
  };

  return (
    <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${styles[type]}`}>
      {type === 'open-source' ? 'Open Source' : 'Work'}
    </span>
  );
};

const Experience = () => (
  <div className="space-y-8">
    <h2 className="text-4xl font-bold italic">03 // Experience</h2>
    <div className="space-y-4">
      {/* Work Experience */}
      <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <h3 className="text-xl font-bold">Frontend Engineer Intern <span className="text-blue-400">@ Jibrin Store</span></h3>
          <ExperienceTag type="work" />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-500 font-mono">May 2025 — July 2025 • Remote</p>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-400">
          <li>Delivered tailored frontend solutions for 5+ clients, boosting conversions by 25%.</li>
          <li>Designed responsive UIs in React + TailwindCSS, improving satisfaction scores by 30%.</li>
          <li>Enhanced accessibility and performance with optimized API integrations and mobile‑first layouts.</li>
          <li>Key stack: React.js, JavaScript, TailwindCSS, API handling</li>
        </ul>
      </div>

      {/* Open Source - GSSoC */}
      <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <h3 className="text-xl font-bold inline-flex items-center gap-2">
            <Github size={20} /> GirlScript Summer of Code
          </h3>
          <ExperienceTag type="open-source" />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-500 font-mono">GSSoC 2024 • Top 350 Contributor || GSSoC 2025 • Project Admin</p>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-400">
          <li>Contributed to 4+ repositories as a top‑350 contributor.</li>
          <li>Focused on functionality improvements, documentation and UI consistency.</li>
          <li>Collaborated with maintainers on code reviews and issue resolution.</li>
        </ul>
      </div>

      {/* Open Source - Hacktoberfest */}
      <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <h3 className="text-xl font-bold inline-flex items-center gap-2">
            <Github size={20} /> Hacktoberfest
          </h3>
          <ExperienceTag type="open-source" />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-500 font-mono">Hacktoberfest 2025</p>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-400">
          <li>Improved code readability and optimized APIs across Python/JavaScript repos.</li>
          <li>Refined documentation through impactful pull requests.</li>
          <li>Earned Hacktoberfest completion badge for quality contributions.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Experience;
