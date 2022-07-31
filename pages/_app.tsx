import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';

import 'styles/global.fallback.css';
import GlobalStyles from 'styles/global.style';
import FontSans from 'public/fonts/font-sans';
import FontSerif from 'public/fonts/font-serif';
import 'styles/global.css';

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <FontSans />
      <FontSerif />
      <GlobalStyles />
      <Component {...pageProps} router={router} />
    </ThemeProvider>
  );
}

export default MyApp;
