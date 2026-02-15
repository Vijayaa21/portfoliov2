import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, FileText, Loader2, Github, Linkedin, ArrowRight } from 'lucide-react';

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
        'https://drive.google.com/file/d/1hIYlnEUKX8xeb6y9RMdH-STr8g-UwSNa/view?usp=sharing',
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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl"
      >
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
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] space-y-5 sm:space-y-6 md:space-y-8 px-1">
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 w-fit rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Available for opportunities</span>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95]">
          <span className="block">Hi, I'm</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500">
            Vijaya Mishra
          </span>
        </h1>
      </motion.div>

      {/* Role Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-2 sm:gap-3"
      >
        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-xs sm:text-sm font-medium">
          Full-Stack Developer
        </span>
        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-500 text-xs sm:text-sm font-medium">
          ML Enthusiast
        </span>
        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-xs sm:text-sm font-medium">
          Open Source Contributor
        </span>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
      >
        I build scalable web applications and intelligent systems. Passionate about clean code, 
        great user experiences, and solving real-world problems with technology.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4"
      >
        <button 
          onClick={() => setIsModalOpen(true)}
          className="group px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 text-sm sm:text-base"
        >
          Get Resume
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        {/* Social Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/Vijayaa21"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all"
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://linkedin.com/in/vijayamishra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
          >
            <Linkedin size={18} className="sm:w-5 sm:h-5" />
          </a>
        </div>
      </motion.div>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Hero;
