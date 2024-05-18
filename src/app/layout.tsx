import { ReactNode } from 'react';

export const metadata = {
  title: 'Raj',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactNode {
  return (
    <html lang="en-GB">
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
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#ffffff" />

      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400&family=Roboto+Mono:wght@400&display=swap"
        rel="stylesheet"
      />
      <body>{children}</body>
    </html>
  );
}
