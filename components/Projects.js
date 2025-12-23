import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Works = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-end">
      <h2 className="text-4xl font-bold italic">04 // Selected Works</h2>
      <p className="text-blue-500 font-mono text-sm">Sorted by Impact</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
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

export default Works;
