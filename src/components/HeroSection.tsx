import React from 'react';

export const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center py-20 px-4 text-center">
    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/50 via-blue-400/40 to-purple-400/30 dark:from-purple-900/60 dark:via-blue-900/60 dark:to-gray-900/80 blur-2xl z-0" />
    <div className="relative z-10 max-w-2xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg animate-fade-in">
        Fraseando
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium animate-fade-in delay-100">
        Frases inspiradoras, emociones, entretenimiento y consejos prácticos
        para cada momento de tu vida.
      </p>
    </div>
  </section>
);
