import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Components
import Sidebar, { SECTIONS } from '../components/Sidebar';
import SectionWrapper from '../components/SectionWrapper';
import Hero from '../components/Hero';
import Identity from '../components/Identity';
import Arsenal from '../components/Arsenal';
import Experience from '../components/Experience';
import Works from '../components/Projects';
import Achievements from '../components/Achievements';
import OpenSource from '../components/OpenSource';
import Connect from '../components/Connect';

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

  // Ref for section content to detect scroll boundaries
  const sectionRef = React.useRef(null);

  // Reset scroll position when section changes
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollTop = 0;
    }
  }, [activeIndex]);

  // Scroll/Wheel navigation - only switch sections at content boundaries
  useEffect(() => {
    let lastNav = 0;
    const handleWheel = (e) => {
      const section = sectionRef.current;
      if (!section) return;

      const { scrollTop, scrollHeight, clientHeight } = section;
      const isAtTop = scrollTop <= 5;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;
      const now = Date.now();

      // If content is scrollable and not at boundary, allow normal scroll
      if (scrollHeight > clientHeight) {
        if (e.deltaY > 0 && !isAtBottom) return; // scrolling down, not at bottom
        if (e.deltaY < 0 && !isAtTop) return;    // scrolling up, not at top
      }

      // Throttle section navigation
      if (now - lastNav < 800) return;

      if (e.deltaY > 30 && isAtBottom) {
        setActiveIndex(prev => {
          if (prev < SECTIONS.length - 1) {
            lastNav = now;
            return prev + 1;
          }
          return prev;
        });
      } else if (e.deltaY < -30 && isAtTop) {
        setActiveIndex(prev => {
          if (prev > 0) {
            lastNav = now;
            return prev - 1;
          }
          return prev;
        });
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
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
            <SectionWrapper key={activeIndex} id={SECTIONS[activeIndex].id} ref={sectionRef}>
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
