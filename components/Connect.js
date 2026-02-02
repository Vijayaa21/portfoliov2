import React from 'react';
import { Send, Mail } from 'lucide-react';

const Connect = () => (
  <div className="max-w-xl mx-auto w-full text-center space-y-8">
    <h2 className="text-5xl font-bold">Initiate Protocol?</h2>
    <p className="text-gray-600 dark:text-gray-400">I'm currently looking for opportunities in full-stack development and machine learning engineering.</p>
    
    {/* Direct Email Contact */}
    <div className="flex items-center justify-center gap-2 text-lg">
      <Mail size={20} className="text-blue-500" />
      <a 
        href="mailto:vijaya21m04@gmail.com" 
        className="text-blue-500 hover:underline underline-offset-4 font-mono"
      >
        vijaya21m04@gmail.com
      </a>
    </div>

    <div className="flex flex-col space-y-4">
      <input className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-blue-500 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="YOUR_EMAIL@DOMAIN.COM" />
      <textarea rows="4" className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-blue-500 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="TRANSMIT MESSAGE..." />
      <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
        <span>SEND TRANSMISSION</span>
        <Send size={18} />
      </button>
    </div>
  </div>
);

export default Connect;
