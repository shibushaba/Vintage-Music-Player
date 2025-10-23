// src/App.jsx
import React, { useState, useEffect } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import CDPlayer from './components/CDPlayer';
import PlaylistInput from './components/PlaylistInput';

// Optional: For optional embed (Spotify/YouTube)
// import ReactPlayer from 'react-player/youtube'; 

const App = () => {
  // State for theme: default to 'dark' as set in themes.css :root
  const [theme, setTheme] = useState('dark');
  const [isPlaying, setIsPlaying] = useState(false);
  // Optional: Placeholder for the actual link/embed
  // const [playlistUrl, setPlaylistUrl] = useState(''); 

  // Effect to apply the theme class to the HTML element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // Set a custom font for the 'anime' theme
    if (theme === 'anime') {
        document.documentElement.style.setProperty('--font-family', 'Orbitron, sans-serif');
    } else {
        document.documentElement.style.setProperty('--font-family', 'sans-serif');
    }
  }, [theme]);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 transition-colors duration-500">
      
      {/* --- Theme Switcher (Top Right) --- */}
      <ThemeSwitcher theme={theme} setTheme={setTheme} />

      {/* --- Main Player Container --- */}
      <div className="flex flex-col items-center w-full max-w-4xl pt-16 md:pt-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-neon text-center uppercase tracking-widest">
          Anime CD Player
        </h1>
        
        {/* --- Playlist Input (Visual Only) --- */}
        <PlaylistInput />

        {/* --- CD Player --- */}
        <CDPlayer 
          isPlaying={isPlaying} 
          togglePlay={togglePlay} 
        />
        
        {/* --- Optional Embed (Hidden) --- */}
        {/*
        {playlistUrl && (
          <div className="hidden"> 
            <ReactPlayer url={playlistUrl} playing={isPlaying} />
          </div>
        )}
        */}

        {/* --- Footer Note (for showoff) --- */}
        <p className="mt-10 text-xs opacity-50 text-center">
            Aesthetic React Showoff Model | Framer Motion & Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default App;