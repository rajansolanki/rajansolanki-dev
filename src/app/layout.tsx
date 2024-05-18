import { ReactNode } from 'react';
import { Heebo, Roboto_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import '../styles/reset.css';
import '../styles/global.css';

const primary = Heebo({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Roboto',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
});

const secondary = Roboto_Mono({
  variable: '--font-secondary',
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    'Inconsolata',
    'Monaco',
    'Consolas',
    'Courier New',
    'Courier',
    'monospace',
  ],
});

export const metadata: Metadata = {
  title: 'Raj',
  manifest: 'site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactNode {
  return (
    <html lang="en-GB" className={`${primary.variable} ${secondary.variable}`}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#ffc40d" />

      <body>{children}</body>
    </html>
  );
}
