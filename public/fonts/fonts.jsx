import { Html } from 'next/document'
import { Head } from 'next/head'

const Fonts = () => (
  <Html>
    <Head>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&display=swap"
        media="print"
        onLoad="this.media='all'"
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&display=swap"
        />
      </noscript>
    </Head>
  </Html>
)

export default Fonts