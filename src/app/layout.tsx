import { Metadata } from 'next';

import '@/styles/globals.css';
import cls from '@/styles/layout.module.css';

import { inter, playfair_display } from './fonts';

export const metadata: Metadata = {
  title: {
    default: "Fahdii Ajmalal Fikrie's personal webpage",
    template: "%s | Fahdii Ajmalal Fikrie's personal webpage",
  },
  description: 'Software Engineer based in D-Town 🇮🇩',
  openGraph: {
    title: 'Fahdii Ajmalal Fikrie',
    description: 'Software Engineer based in D-Town 🇮🇩',
    url: 'https://fahdikrie.tech',
    siteName: 'Fahdii Ajmalal Fikrie',
    images: [
      {
        url: 'https://fahdikrie.tech/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair_display.variable} ${inter.variable}`}
    >
      <body>
        <main className={cls.Main}>{children}</main>
      </body>
    </html>
  );
}
