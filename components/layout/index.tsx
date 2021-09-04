import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import NavigationBar from 'components/layout/navigation-bar';
import * as S from './index.style';

const VantaLayout = dynamic(() => import('./vanta-layout/index'), {
  ssr: false,
});

interface LayoutProps {
  currentPage: string;
  children: React.ReactNode;
  pageTitle: string;
  description: string;
}

const Layout = ({
  currentPage,
  children,
  pageTitle,
  description,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description}></meta>
        <meta name="author" content="Fahdii Ajmalal Fikrie"></meta>
        <meta charSet="utf-8" />

        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta
          property="og:site_name"
          content="badi's personal webpage"
          key="ogsite"
        />

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

        <title>{pageTitle} | badi's personal webpage</title>
      </Head>
      <S.Layout>
        {currentPage === '/' ? <VantaLayout /> : null}
        <NavigationBar currentPage={currentPage} />
        {children}
      </S.Layout>
    </>
  );
};

export default Layout;
