import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://phrasing.briapps.com.ar'),
  title: 'Fraseando',
  description:
    'Frases inspiradoras, emociones, entretenimiento y consejos prácticos. Encuentra la cita perfecta para cada momento.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://phrasing.briapps.com.ar',
    title: 'Fraseando',
    description:
      'Frases inspiradoras, emociones, entretenimiento y consejos prácticos. Encuentra la cita perfecta para cada momento.',
    siteName: 'Fraseando',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fraseando',
    description:
      'Frases inspiradoras, emociones, entretenimiento y consejos prácticos. Encuentra la cita perfecta para cada momento.',
    creator: '@BriApps',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Fraseando',
  alternateName: 'Fraseando Inspiracional',
  description:
    'Frases inspiradoras, emociones, entretenimiento y consejos prácticos. Encuentra la cita perfecta para cada momento.',
  url: 'https://phrasing.briapps.com.ar',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
    },
    'query-input': 'required name=search_term_string',
  },
  author: {
    '@type': 'Organization',
    name: 'BriApps',
    logo: {
      '@type': 'ImageObject',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <div className="absolute right-4 top-4 z-50">
              <ThemeToggle />
            </div>
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
