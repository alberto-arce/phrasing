'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-0 bg-gradient-to-r from-pink-100 via-blue-100 to-purple-200 dark:from-gray-900 dark:via-blue-950 dark:to-purple-900 py-8 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Fraseando
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-3">
          Frases inspiradoras, emociones y entretenimiento para cada momento.
        </p>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {currentYear} Fraseando. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
