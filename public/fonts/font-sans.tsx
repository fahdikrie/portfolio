// @ts-nocheck
import Head from 'next/head';

const FontSans = () => (
  <>
    <Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        rel="stylesheet preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
        media="print"
        onLoad="this.media='all'"
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
        />
      </noscript>
    </Head>
  </>
);

export default FontSans;
