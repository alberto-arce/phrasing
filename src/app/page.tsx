'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { CategorySelector } from '@/components/CategorySelector';
import { QuoteList } from '@/components/QuoteList';
import quotes from '@/data/quotes.json';
import { Search } from 'lucide-react';

type Quote = {
  id: string | number;
  text: string;
  author: string;
};

type Category = {
  id: string;
  name: string;
  quotes: Quote[];
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(
    (quotes.categories as Category[])[0].id,
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCategories, setVisibleCategories] = useState<string[]>([]);
  const QUOTES_TO_SHOW = 10;

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setVisibleCategories(
        (quotes.categories as Category[]).map((cat) => cat.id),
      );
    } else {
      const filtered = (quotes.categories as Category[])
        .filter(
          (cat) =>
            cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cat.quotes.some(
              (q) =>
                q.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.author.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
        )
        .map((cat) => cat.id);

      setVisibleCategories(filtered);

      if (filtered.length > 0 && !filtered.includes(selectedCategory)) {
        setSelectedCategory(filtered[0]);
      }
    }
  }, [searchTerm, selectedCategory]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);

    setTimeout(() => {
      const element = document.getElementById('content-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => { }, 60000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-200 dark:from-gray-900 dark:via-blue-950 dark:to-purple-900">
      <HeroSection />
      <div className="container mx-auto px-4 py-8 -mt-10 relative z-20">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar frases o autores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-900 dark:text-white"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="h-5 w-5" />
            </span>
          </div>
        </div>
        <CategorySelector
          categories={(quotes.categories as Category[]).filter((cat) =>
            visibleCategories.includes(cat.id),
          )}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <section id="content-section" className="mt-16">
          {(() => {
            const category = (quotes.categories as Category[]).find(
              (cat) => cat.id === selectedCategory,
            );
            if (!category) return null;
            const matchingQuotes = category.quotes.filter(
              (q) =>
                q.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.author.toLowerCase().includes(searchTerm.toLowerCase()),
            );
            const matchingQuotesString = matchingQuotes.map((q) => ({
              ...q,
              id: String(q.id),
            }));
            const displayQuotes = matchingQuotesString.slice(0, QUOTES_TO_SHOW);
            return (
              <div className="mb-12">
                <QuoteList displayQuotes={displayQuotes} />
              </div>
            );
          })()}
        </section>
      </div>
    </main>
  );
}
