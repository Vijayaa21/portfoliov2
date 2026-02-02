import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Twitter, MapPin, Loader2, CheckCircle, MessageSquare } from 'lucide-react';

const socialLinks = [
  { icon: <Github size={20} />, label: 'GitHub', url: 'https://github.com/Vijayaa21', color: 'hover:text-white hover:bg-gray-800' },
  { icon: <Linkedin size={20} />, label: 'LinkedIn', url: 'https://linkedin.com/in/vijayamishra', color: 'hover:text-white hover:bg-blue-600' },
  { icon: <Twitter size={20} />, label: 'Twitter', url: 'https://twitter.com/vijayamishra', color: 'hover:text-white hover:bg-sky-500' },
];

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    try {
      await fetch('https://formspree.io/f/mojlpdzg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `Portfolio Message from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full space-y-8 sm:space-y-10 lg:space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 sm:space-y-4"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Let's Connect</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
          I'm always excited to collaborate on interesting projects or discuss new opportunities. Drop me a message!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
        {/* Contact Info - Hidden on mobile and tablet */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden lg:block lg:col-span-2 space-y-6"
        >
          {/* Email Card */}
          <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl space-y-4">
            <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-500">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Email me at</p>
              <a 
                href="mailto:vijaya21m04@gmail.com" 
                className="text-lg font-semibold text-blue-500 hover:underline underline-offset-4"
              >
                vijaya21m04@gmail.com
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl space-y-4">
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-500">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Based in</p>
              <p className="text-lg font-semibold">Prayagraj, India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl">
            <p className="text-sm text-gray-500 mb-4">Find me on</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 transition-all ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form - Full width on mobile/tablet */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 lg:p-8 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <MessageSquare size={18} className="sm:w-5 sm:h-5 text-blue-500" />
              <h3 className="text-base sm:text-lg font-bold">Send a Message</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm text-gray-500 mb-1.5 sm:mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-500 transition-colors text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-500 mb-1.5 sm:mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-500 transition-colors text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm text-gray-500 mb-1.5 sm:mb-2">Message</label>
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hey Vijaya, I'd love to discuss..."
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-500 transition-colors resize-none text-sm sm:text-base"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-3 sm:py-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all text-sm sm:text-base ${
                status === 'success'
                  ? 'bg-green-500 text-white'
                  : status === 'error'
                  ? 'bg-red-500 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {status === 'loading' ? (
                <><Loader2 size={18} className="animate-spin" /> Sending...</>
              ) : status === 'success' ? (
                <><CheckCircle size={18} /> Message Sent!</>
              ) : status === 'error' ? (
                <>Something went wrong</>
              ) : (
                <><Send size={18} /> Send Message</>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-sm text-gray-500"
      >
        Currently open to internships and full-time opportunities in software engineering and ML.
      </motion.p>
    </div>
  );
};

export default Connect;
