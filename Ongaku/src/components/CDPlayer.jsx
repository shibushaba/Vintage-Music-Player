// src/components/CDPlayer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react'; // Using lucide-react for icons

const CDPlayer = ({ isPlaying, togglePlay }) => {
  const discSize = 'w-64 h-64 md:w-80 md:h-80';

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[var(--secondary)] rounded-xl shadow-2xl relative">
      
      {/* --- CD Disc Container (The Main Visual) --- */}
      <div 
        className={`${discSize} rounded-full relative overflow-hidden`}
        style={{ boxShadow: 'var(--disc-shadow)', transition: 'box-shadow 0.5s ease' }}
      >
        {/* --- Rotating Disc (Framer Motion) --- */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className={`absolute inset-0 rounded-full`}
          style={{ 
            backgroundImage: `radial-gradient(circle at center, #ffffff33 0%, #000000 70%), var(--cd-texture)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '2px solid var(--accent)',
          }}
        >
          {/* Inner reflective circle (hole) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full bg-gray-900 border-4 border-gray-600"></div>
          
          {/* Subtle reflection/light gloss overlay */}
          <div className="absolute inset-0 rounded-full"
               style={{ 
                 background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)'
               }}
          />
        </motion.div>
        
        {/* --- Glowing Ring (Pulse Animation) --- */}
        {isPlaying && (
          <div
            className={`absolute inset-0 rounded-full border-4 opacity-75 animate-glow-pulse`}
            style={{ 
              borderColor: 'var(--glow-color)',
              boxShadow: '0 0 15px var(--glow-color)'
            }}
          />
        )}

      </div>
      
      {/* --- Controls --- */}
      <div className="mt-8 flex items-center space-x-6">
        <button
          onClick={togglePlay}
          className="p-4 rounded-full bg-[var(--accent)] text-black shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-xl"
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} />}
        </button>
      </div>

      {/* --- Track Info Placeholder --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isPlaying ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
        className="mt-6 text-center"
        style={{ fontFamily: 'var(--font-family, sans-serif)' }}
      >
        <p className="text-lg md:text-xl font-bold text-neon">
          {isPlaying ? "Track Title - Artist Name" : "Paused"}
        </p>
        <p className="text-sm md:text-base opacity-70">
          Future Wave Playlist ⚡
        </p>
      </motion.div>
    </div>
  );
};

export default CDPlayer;