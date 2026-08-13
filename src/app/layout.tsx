import { PropsWithChildren } from 'react';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Fira_Mono, Karla } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import '@/styles/index.css';

import type { Metadata } from 'next';

const karla = Karla({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-karla' });
const firaMono = Fira_Mono({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-fira-mono' });

export const metadata: Metadata = {
  title: {
    template: '%s | Samuel Arno Saputra',
    default: 'Samuel Arno Saputra | Web Engineer',
  },
  description:
    'Personal portfolio of Samuel Arno Saputra — a web engineer passionate about building intuitive, high-impact digital experiences.',
  keywords: [
    'sammyarno',
    'sammyarno.com',
    'web engineer',
    'web developer indonesia',
    'samuel',
    'samuelarnosaputra',
    'freelance web',
  ],
  authors: [{ name: 'Samuel Arno Saputra' }],
  creator: 'Samuel Arno Saputra',
  metadataBase: new URL('https://sammyarno.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Samuel Arno Saputra | Web Engineer',
    description:
      'Personal portfolio of Samuel Arno Saputra — a web engineer passionate about building intuitive, high-impact digital experiences.',
    url: 'https://sammyarno.com',
    siteName: 'Samuel Arno Saputra',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Arno Saputra | Web Engineer',
    description:
      'Personal portfolio of Samuel Arno Saputra — a web engineer passionate about building intuitive, high-impact digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = PropsWithChildren<{}>;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Samuel Arno Saputra',
      url: 'https://sammyarno.com',
      jobTitle: 'Web Engineer',
      sameAs: ['https://instagram.com/sammyarno', 'https://www.linkedin.com/in/samuelsaputra/'],
    },
    {
      '@type': 'WebSite',
      name: 'Samuel Arno Saputra',
      url: 'https://sammyarno.com',
    },
  ],
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={`${karla.variable} ${firaMono.variable}`}>
      <head>
        <meta name="theme-color" content="#124559" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
    </html>
  );
};

export default RootLayout;
