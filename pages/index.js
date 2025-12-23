import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter,
  Mail, 
  ExternalLink, 
  Code, 
  User, 
  Terminal, 
  Cpu, 
  Briefcase, 
  Send,
  ChevronUp,
  ChevronDown,
  Layout,
  Database,
  Smartphone,
  Cpu as Processor,
  Sun,
  Moon,
  Award,
  Trophy,
  BadgeCheck
} from 'lucide-react';

// --- Configuration ---
const SECTIONS = [
  { id: 'hero', label: 'Index', icon: <Terminal size={20} /> },
  { id: 'about', label: 'Identity', icon: <User size={20} /> },
  { id: 'skills', label: 'Arsenal', icon: <Cpu size={20} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
  { id: 'projects', label: 'Works', icon: <Layout size={20} /> },
  { id: 'achievements', label: 'Achievements', icon: <Trophy size={20} /> },
  { id: 'oss', label: 'Open Source', icon: <Github size={20} /> },
  { id: 'contact', label: 'Connect', icon: <Mail size={20} /> },
];

// --- Sub-Components ---

const Sidebar = ({ activeIndex, setActiveIndex, isDark, onToggleTheme }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-gray-50 dark:bg-[#0a0a0a] border-r border-black/10 dark:border-white/5 z-50 flex flex-col items-center lg:items-stretch py-8 transition-all">
      <div className="px-6 mb-12 hidden lg:block">
        <h2 className="text-xl font-bold tracking-tighter text-blue-500">
          VIJAYA<span className="text-gray-900 dark:text-white">.MISHRA</span>
        </h2>
        <p className="text-[10px] text-gray-700 dark:text-gray-500 font-mono mt-1 uppercase tracking-widest">Final Year / Class of 2026</p>
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </div>

      <nav className="flex-1 space-y-2 px-3 w-full">
        {SECTIONS.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setActiveIndex(index)}
            className={`w-full flex items-center group relative px-4 py-3 rounded-xl transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <span className="relative z-10">{section.icon}</span>
            <span className="hidden lg:block ml-4 font-medium text-sm relative z-10">{section.label}</span>
            {activeIndex === index && (
              <motion.div 
                layoutId="activePill"
                className="absolute inset-0 bg-blue-600/10 rounded-xl border-r-2 border-blue-500"
              />
            )}
          </button>
        ))}
      </nav>

      <div className="px-6 mt-auto hidden lg:flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Github size={18} /></a>
          <a href="#" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Linkedin size={18} /></a>
          <a href="#" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Twitter size={18} /></a>
          <a href="#" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Code size={18} /></a>

        </div>
        <div className="h-px bg-black/10 dark:bg-white/5 w-full" />
        <p className="text-[10px] text-gray-700 dark:text-gray-600 font-mono"></p>
      </div>
    </aside>
  );
};

const SectionWrapper = ({ children, id, active }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="h-full w-full flex flex-col justify-center px-6 lg:px-20 max-w-6xl mx-auto"
    >
      {children}
    </motion.section>
  );
};

// --- Page Components ---

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
      <button className="px-8 py-4 font-bold rounded-sm transition-all bg-black text-white hover:bg-neutral-800 dark:bg-transparent dark:text-white dark:border dark:border-white/10 dark:hover:bg-white/5">
        GET RESUME
      </button>
    </div>
  </div>
);

const Identity = () => (
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <h2 className="text-4xl font-bold italic">01 // Identity</h2>
      <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
        B.Tech in Electronics and Communication Engineering (University of Allahabad, GPA 8.4). Strong foundation in data structures, REST APIs, authentication and deployment. Based in Prayagraj, India.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Email', val: 'vijayam0421@gmail.com' },
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

const Arsenal = () => {
  const skills = [
    { title: 'Languages', icon: <Code />, list: ['Python', 'C++', 'JavaScript', 'SQL'] },
    { title: 'Frameworks', icon: <Layout />, list: ['Django', 'Node.js', 'Express.js', 'React.js', 'Next.js', 'FastAPI', 'Tailwind CSS', 'React Query', 'Zustand', 'Socket.io'] },
    { title: 'Databases & Tools', icon: <Database />, list: ['MongoDB', 'Git', 'GitHub', 'Cloudinary', 'JWT', 'Cookies', 'Linux (Ubuntu)', 'Docker', 'Docker Compose'] },
    { title: 'Concepts', icon: <Processor />, list: ['DSA', 'REST APIs', 'AuthN/AuthZ', 'Deployment'] },
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold italic">02 // Arsenal</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, idx) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={skill.title} 
            className="p-8 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-3xl space-y-6"
          >
            <div className="text-blue-500">{skill.icon}</div>
            <h3 className="font-bold text-xl">{skill.title}</h3>
            <ul className="space-y-2">
              {skill.list.map(s => <li key={s} className="text-sm text-gray-700 dark:text-gray-500 font-mono">• {s}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Works = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-end">
      <h2 className="text-4xl font-bold italic">03 // Selected Works</h2>
      <p className="text-blue-500 font-mono text-sm">Sorted by Impact</p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {/* Pingify */}
      <div className="group relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden">
        <div className="aspect-video bg-black/10 dark:bg-white/10" />
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-2">Pingify</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Real-time chat app with JWT auth, typing indicators, presence, and read receipts. Built with React, Node, Express, MongoDB, Socket.io.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['React','Node','Express','MongoDB','Socket.io','Tailwind'].map(t=> (
              <span key={t} className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-[10px] font-mono">{t}</span>
            ))}
          </div>
          <div className="flex gap-3 text-sm">
            <a className="inline-flex items-center gap-1 hover:underline" href="#"><Github size={14}/> Code</a>
          </div>
        </div>
      </div>
    

      {/* Blabber */}
      <div className="group relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden">
        <div className="aspect-video bg-black/10 dark:bg-white/10" />
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-2">Blabber</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Full‑stack social platform with JWT auth, posts, comments, likes, recommendations; React Query state sync and Cloudinary media.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['React','Node','Express','MongoDB','React Query','Tailwind','MUI','REST'].map(t=> (
              <span key={t} className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-[10px] font-mono">{t}</span>
            ))}
          </div>
          <div className="flex gap-3 text-sm">
            <a className="inline-flex items-center gap-1 hover:underline" href="#"><ExternalLink size={14}/> Live</a>
          </div>
        </div>
      </div>

      {/* Fashion Fista */}
      <div className="group relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden md:col-span-2">
        <div className="aspect-video bg-black/10 dark:bg-white/10" />
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-2">Fashion Fista</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Interactive fashion e‑commerce app with virtual try‑on, theme customization, thrift marketplace and a real‑time Shopping Buddy boosting retention by 35%.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['React','Tailwind'].map(t=> (
              <span key={t} className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-[10px] font-mono">{t}</span>
            ))}
          </div>
          <div className="flex gap-3 text-sm">
            <a className="inline-flex items-center gap-1 hover:underline" href="#"><Github size={14}/> Code</a>
          </div>
        </div>
      </div>
    </div>
    </div>
);

const Connect = () => (
  <div className="max-w-xl mx-auto w-full text-center space-y-8">
    <h2 className="text-5xl font-bold">Initiate Protocol?</h2>
    <p className="text-gray-600 dark:text-gray-400">I'm currently looking for early-career opportunities in software engineering or systems architecture.</p>
    <div className="flex flex-col space-y-4">
      <input className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-blue-500 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="IDENTITY@EMAIL.COM" />
      <textarea rows="4" className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-blue-500 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="TRANSMIT MESSAGE..." />
      <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
        <span>SEND TRANSMISSION</span>
        <Send size={18} />
      </button>
    </div>
  </div>
);

const Experience = () => (
  <div className="space-y-8">
    <h2 className="text-4xl font-bold italic">03 // Experience</h2>
    <div className="space-y-4">
      <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
        <h3 className="text-xl font-bold">Frontend Engineer Intern <span className="text-blue-400">@ Jibrin Store</span></h3>
        <p className="text-sm text-gray-600 dark:text-gray-500 font-mono">May 2025 — July 2025 • Remote</p>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-400">
          <li>Delivered tailored frontend solutions for 5+ clients, boosting conversions by 25%.</li>
          <li>Designed responsive UIs in React + TailwindCSS, improving satisfaction scores by 30%.</li>
          <li>Enhanced accessibility and performance with optimized API integrations and mobile‑first layouts.</li>
          <li>Key stack: React.js, JavaScript, TailwindCSS, API handling</li>
        </ul>
      </div>
    </div>
  </div>
);


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
    </div>
  </div>
);

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

// --- Main App ---

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(initialDark);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setActiveIndex(prev => Math.min(prev + 1, SECTIONS.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setActiveIndex(prev => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll/Wheel navigation (Throttled)
  useEffect(() => {
    let lastScroll = 0;
    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastScroll < 1000) return; // 1s throttle for smoother transitions
      
      if (e.deltaY > 50) {
        setActiveIndex(prev => Math.min(prev + 1, SECTIONS.length - 1));
        lastScroll = now;
      } else if (e.deltaY < -50) {
        setActiveIndex(prev => Math.max(prev - 1, 0));
        lastScroll = now;
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const renderSection = () => {
    switch(activeIndex) {
      case 0: return <Hero />;
      case 1: return <Identity />;
      case 2: return <Arsenal />;
      case 3: return <Experience />;
      case 4: return <Works />;
      case 5: return <Achievements />;
      case 6: return <OpenSource />;
      case 7: return <Connect />;
      default: return <Hero />;
    }
  };

  return (
    <div className={`${isDark ? 'dark' : ''} bg-white dark:bg-[#050505] text-gray-900 dark:text-white min-h-screen font-sans selection:bg-blue-500 selection:text-white flex overflow-hidden`}>
      
      {/* Sidebar Nav */}
      <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />

      {/* Main Slideshow Content */}
      <main className="flex-1 ml-20 lg:ml-64 h-screen relative">
        
        {/* Animated Slide Container */}
        <div className="h-full w-full relative">
          <AnimatePresence mode="wait">
            <SectionWrapper key={activeIndex} id={SECTIONS[activeIndex].id}>
              {renderSection()}
            </SectionWrapper>
          </AnimatePresence>
        </div>

        {/* Page Indicators (Vertical) */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4 hidden md:flex">
          {SECTIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-1 transition-all duration-500 ${
                activeIndex === i ? 'h-8 bg-blue-500' : 'h-2 bg-black/10 dark:bg-white/10'
              }`}
            />
          ))}
        </div>

        {/* Navigation Controls (Mobile) */}
        <div className="fixed bottom-6 right-6 flex flex-col space-y-2 md:hidden">
          <button 
            onClick={() => setActiveIndex(p => Math.max(p - 1, 0))}
            className="p-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
          >
            <ChevronUp size={24} />
          </button>
          <button 
            onClick={() => setActiveIndex(p => Math.min(p + 1, SECTIONS.length - 1))}
            className="p-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </main>

      {/* Background Decorative Grid */}
       <div className="fixed inset-0 pointer-events-none opacity-[0.04] -z-10" 
         style={{ backgroundImage: isDark ? 'radial-gradient(#ffffff 1px, transparent 1px)' : 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
}

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      aria-label="Toggle theme"
      onClick={onToggle}
      className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
    >
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
      <span className="font-mono">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}
