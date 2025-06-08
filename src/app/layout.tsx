import { PropsWithChildren } from 'react';

import { GoogleAnalytics } from '@next/third-parties/google';

import 'styles/index.css';

type RootLayoutProps = PropsWithChildren<{}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Samuel's Website</title>
        {/* <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        {/* <meta name="robots" content="INDEX, FOLLOW" data-react-helmet="true" /> */}

        <meta name="lang" content="en" />
        <meta name="theme-color" content="#124559" />
        <meta name="description" content="Samuel's Personal Website" />

        <meta
          name="keywords"
          content="sammyarno, sammyarno.com, sammyarno website, web engineer, web developer indonesia, sammy, sammyarno, samuel, samuelarnosaputra, freelance web"
        />
        <meta name="author" content="sammyarno" />
        <meta name="publisher" content="sammyarno" />
        <link rel="canonical" href="https://sammyarno.com" data-react-helmet="true" />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
    </html>
  );
};

export default RootLayout;
