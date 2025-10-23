import React from 'react';

const ThemeSwitcher = ({ theme, setTheme }) => {
  const themes = [
    { name: "Vintage Silver", key: "vintage" },
    { name: "Dark Tech", key: "dark" },
    { name: "Anime Neon", key: "anime" },
  ];

  return (
    <div className="absolute top-4 right-4 z-20 flex space-x-2">
      {themes.map((t) => (
        <button
          key={t.key}
          onClick={() => setTheme(t.key)}
          className={`px-3 py-1 text-xs md:text-sm rounded-full transition-all duration-300 border-2
            ${
              theme === t.key
                ? 'bg-[var(--accent)] text-black border-[var(--accent)] font-bold text-shadow-md'
                : 'bg-transparent text-[var(--accent)] border-[var(--accent)] opacity-70 hover:opacity-100'
            }`}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;