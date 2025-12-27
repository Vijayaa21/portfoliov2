import React from 'react';

const Hero = () => (
  <div className="space-y-6">
    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>
      <span>Open to internships and full-time SWE roles</span>
    </div>
    <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
      CODE <br /> 
      <span className="inline dark:hidden text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.3)' }}>CREATE</span>
      <span className="hidden dark:inline text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>CREATE</span> <br /> 
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">CONNECT.</span>
    </h1>
    <div className="space-y-2">
      <p className="text-2xl font-bold">Vijaya Mishra</p>
      <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
        Full‑stack developer passionate about realtime apps, performant UIs and clean API design.
      </p>
      <div className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300">
        <a className="underline underline-offset-4" href="mailto:vijayam0421@gmail.com">vijayam0421@gmail.com</a>
      </div>
    </div>
    <div className="flex pt-4 space-x-4">
      <button className="px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-blue-500 hover:text-white transition-all">
        VIEW ARCHIVE
      </button>
      <a href = "https://drive.google.com/file/d/1mQ8KugRWMIhimH-UxEOsezT5rEew5tiK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <button className="px-8 py-4 font-bold rounded-sm transition-all bg-black text-white hover:bg-neutral-800 dark:bg-transparent dark:text-white dark:border dark:border-white/10 dark:hover:bg-white/5">
        GET RESUME
      </button>
      </a>
    </div>
  </div>
);

export default Hero;
