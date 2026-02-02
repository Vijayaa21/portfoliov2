import React, { useState } from 'react';
import { X, FileText, Loader2 } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('https://formspree.io/f/mojlpdzg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `👀 Resume Request from ${name}`,
          name: name,
          email: email,
          timestamp: new Date().toISOString(),
          message: `${name} (${email}) requested to view your resume.`,
        }),
      });

      // Open resume in new tab
      window.open(
        'https://drive.google.com/file/d/1mQ8KugRWMIhimH-UxEOsezT5rEew5tiK/view?usp=sharing',
        '_blank'
      );

      // Reset and close
      setName('');
      setEmail('');
      onClose();
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText size={32} className="text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Get My Resume</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Enter your details to access my resume
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>UNLOCKING...</span>
              </>
            ) : (
              <span>UNLOCK RESUME</span>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-4">
          Your info helps me follow up on opportunities
        </p>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
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
          Full‑stack developer & ML enthusiast building scalable web apps, intelligent systems, and real‑time experiences. Passionate about clean architecture, performant UIs, and data‑driven solutions.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300">
          <a className="underline underline-offset-4" href="mailto:vijaya21m04@gmail.com">vijaya21m04@gmail.com</a>
        </div>
      </div>
      <div className="flex pt-4 space-x-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-blue-500 hover:text-white transition-all"
        >
          GET RESUME
        </button>
      </div>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Hero;
