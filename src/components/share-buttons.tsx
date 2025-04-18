'use client';

import React from 'react';
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';

interface ShareButtonsProps {
  text: string;
  author: string;
}

export function ShareButtons({ text, author }: ShareButtonsProps) {
  const quote = `"${text}" - ${author}`;
  const encodedQuote = encodeURIComponent(quote);

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}&via=diverso_app`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnWhatsapp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedQuote}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex space-x-2 mt-3">
      <button
        onClick={shareOnTwitter}
        className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-[#1DA1F2] dark:text-[#1DA1F2] transition-colors"
        aria-label="Compartir en Twitter"
        title="Compartir en Twitter"
      >
        <FaTwitter className="w-4 h-4" />
      </button>

      <button
        onClick={shareOnWhatsapp}
        className="p-2 rounded-full bg-green-50 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-[#25D366] dark:text-[#25D366] transition-colors"
        aria-label="Compartir en WhatsApp"
        title="Compartir en WhatsApp"
      >
        <FaWhatsapp className="w-4 h-4" />
      </button>
    </div>
  );
}
