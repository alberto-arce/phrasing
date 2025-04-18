'use client';

import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ShareButtons } from './share-buttons';

interface QuoteCardProps {
  text: string;
  author: string;
  id?: string;
  category?: string;
}

export function QuoteCard({
  text,
  author,
}: QuoteCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`"${text}" - ${author}`);
      setCopied(true);
      toast.success('¡Frase copiada!');

      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Error al copiar la frase');
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mb-8 bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl border-none transition-transform hover:scale-105 hover:shadow-pink-200/40 dark:hover:shadow-purple-900/50 animate-fade-in">
      <CardContent className="p-8 flex flex-col items-center">
        <blockquote className="mb-6 text-2xl md:text-3xl italic text-center text-purple-700 dark:text-pink-200 drop-shadow-lg">
          &ldquo;{text}&rdquo;
        </blockquote>
        <p className="text-right text-lg text-gray-600 dark:text-gray-400 font-semibold w-full">
          - {author}
        </p>
        <div className="mt-6 flex flex-col gap-3 w-full">
          <div className="flex justify-end gap-3">
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow hover:from-pink-500 hover:to-purple-600 transition"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="ml-2 hidden sm:inline">Copiar</span>
            </Button>
          </div>
          <div className="flex justify-end">
            <ShareButtons text={text} author={author} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
