import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { default as DesktopNavbar } from 'components/layout/Regular/Navbar/Desktop';
import { default as MobileNavbar } from 'components/layout/Regular/Navbar/Mobile';
import * as S from 'components/layout/Regular/index.style';
import useViewportSize from 'hooks/useViewportSize';

const VantaLayout = dynamic(
  () => import('components/layout/Regular/VantaLayout'),
  {
    ssr: false,
  }
);

const RegularLayout = ({
  currentPage,
  children,
  pageTitle,
  pageDescription,
}: RegularLayoutProps) => {
  const width = useViewportSize();

  const Navbar = ({ currentPage }: { currentPage: string }) => {
    if (!width) return <></>;

    if (width < 768) {
      return <MobileNavbar currentPage={currentPage} />;
    } else {
      return <DesktopNavbar currentPage={currentPage} />;
    }
  };

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{`${pageTitle} | Fahdii Ajmalal Fikrie's personal webpage`}</title>
        <meta
          name="title"
          content={`${pageTitle} | Fahdii Ajmalal Fikrie's personal webpage`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Fahdii Ajmalal Fikrie" />
        <meta name="description" content={pageDescription} />
        <meta charSet="utf-8" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fahdikrie.com/" />
        <meta
          property="og:title"
          content={`${pageTitle} | Fahdii Ajmalal Fikrie's personal webpage`}
        />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/favicon/bbbadi-ogimage.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fahdikrie.com/" />
        <meta
          property="twitter:title"
          content={`${pageTitle} | Fahdii Ajmalal Fikrie's personal webpage`}
        />
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
        {currentPage === '/' ? <VantaLayout /> : null}
        <Navbar currentPage={currentPage} />
        {children}
      </S.Layout>
    </>
  );
};

export default RegularLayout;
