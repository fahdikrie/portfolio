import React from 'react';
import Head from 'next/head';

import * as S from './index.style';
import JournalNavbar from './Navbar';

const JournalLayout = ({
  children,
  pageTitle,
  pageDescription,
}: LayoutProps) => {
  const TITLE = `${pageTitle} | Fahdii Ajmalal Fikrie's personal webpage`;

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{TITLE}</title>
        <meta name="title" content={TITLE} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Fahdii Ajmalal Fikrie" />
        <meta name="description" content={pageDescription} />
        <meta charSet="utf-8" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fahdikrie.com/" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/favicon/bbbadi-ogimage.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fahdikrie.com/" />
        <meta property="twitter:title" content={TITLE} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="/favicon/bbbadi-ogimage.png" />

        {/* <!-- Favicon --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </Head>
      <S.Layout>
        <JournalNavbar />
        {children}
      </S.Layout>
    </>
  );
};

export default JournalLayout;
