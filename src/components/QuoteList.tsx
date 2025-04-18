'use client';

import React from 'react';
import { QuoteCard } from './quote-card';

interface Quote {
  id: string;
  text: string;
  author: string;
}

interface QuoteListProps {
  displayQuotes: Quote[];
}

export const QuoteList = ({ displayQuotes }: QuoteListProps) => (
  <>
    <div className="space-y-4">
      {displayQuotes.map((quote) => (
        <QuoteCard key={quote.id} {...quote} />
      ))}
    </div>
  </>
);
