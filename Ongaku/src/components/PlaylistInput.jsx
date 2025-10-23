// src/components/PlaylistInput.jsx
import React from 'react';
import { Link } from 'lucide-react';

const PlaylistInput = () => {
  return (
    <div className="w-full max-w-lg mb-8 p-4 bg-[var(--secondary)] rounded-lg shadow-inner flex items-center">
      <Link className="mr-3 text-[var(--accent)] flex-shrink-0" size={20} />
      <input
        type="text"
        placeholder="Paste playlist link here (Aesthetic only)"
        disabled
        className="w-full bg-transparent border-none focus:ring-0 text-[var(--primary-text)] placeholder-[var(--accent)] opacity-70 font-mono"
      />
    </div>
  );
};

export default PlaylistInput;