import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';

import 'styles/global.fallback.css';
import GlobalStyles from 'styles/global.style';
import FontSans from 'public/fonts/font-sans';
import FontSerif from 'public/fonts/font-serif';
import 'styles/global.css';

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css';
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css';
// used for collection views (optional)
import 'rc-dropdown/assets/index.css';
// used for rendering equations (optional)
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
