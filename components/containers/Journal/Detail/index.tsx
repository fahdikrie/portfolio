import { useMemo } from 'react';
import { NotionRenderer } from 'react-notion-x';
import ProgressBar from 'react-scroll-progress-bar';
import TweetEmbed from 'react-tweet-embed';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { JournalDetailComponentProps } from 'types/pages';
import * as S from './index.style';
import Header from './Header';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => {
    await Promise.all([
      import('prismjs/components/prism-markup-templating.js'),
      import('prismjs/components/prism-markup.js'),
      import('prismjs/components/prism-bash.js'),
      import('prismjs/components/prism-c.js'),
      import('prismjs/components/prism-cpp.js'),
      import('prismjs/components/prism-csharp.js'),
      import('prismjs/components/prism-docker.js'),
      import('prismjs/components/prism-java.js'),
      import('prismjs/components/prism-kotlin.js'),
      import('prismjs/components/prism-js-templates.js'),
      import('prismjs/components/prism-coffeescript.js'),
      import('prismjs/components/prism-typescript.js'),
      import('prismjs/components/prism-diff.js'),
      import('prismjs/components/prism-git.js'),
      import('prismjs/components/prism-go.js'),
      import('prismjs/components/prism-graphql.js'),
      import('prismjs/components/prism-handlebars.js'),
      import('prismjs/components/prism-less.js'),
      import('prismjs/components/prism-makefile.js'),
      import('prismjs/components/prism-markdown.js'),
      import('prismjs/components/prism-objectivec.js'),
      import('prismjs/components/prism-ocaml.js'),
      import('prismjs/components/prism-python.js'),
      import('prismjs/components/prism-reason.js'),
      import('prismjs/components/prism-rust.js'),
      import('prismjs/components/prism-sass.js'),
      import('prismjs/components/prism-scss.js'),
      import('prismjs/components/prism-solidity.js'),
      import('prismjs/components/prism-sql.js'),
      import('prismjs/components/prism-stylus.js'),
      import('prismjs/components/prism-swift.js'),
      import('prismjs/components/prism-wasm.js'),
      import('prismjs/components/prism-yaml.js'),
    ]);
    return m.Code;
  })
);

const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);

const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false,
  }
);

const Modal = dynamic(
  () =>
    import('react-notion-x/build/third-party/modal').then((m) => {
      m.Modal.setAppElement('.notion-viewport');
      return m.Modal;
    }),
  {
    ssr: false,
  }
);

const Tweet = ({ id }: { id: string }) => {
  return (
    <S.TweetWrapper>
      <TweetEmbed tweetId={id} />
    </S.TweetWrapper>
  );
};

const JournalDetail = ({
  post,
  postRecordMap,
  mapPageUrl,
}: JournalDetailComponentProps) => {
  const { resolvedTheme } = useTheme();
  const isLightMode = resolvedTheme === 'light';

  const components = useMemo(
    () => ({
      nextImage: Image,
      nextLink: Link,
      Code: Code,
      Equation: Equation,
      Modal: Modal,
      Pdf: Pdf,
      Tweet: Tweet,
    }),
    []
  );

  if (!resolvedTheme) return <></>;

  return (
    <>
      <ProgressBar bgcolor={isLightMode ? '#513203' : '#bb19bb'} />
      <S.JournalDetail>
        <Header post={post} />
        <NotionRenderer
          recordMap={postRecordMap}
          mapPageUrl={mapPageUrl}
          components={components}
          darkMode={!isLightMode}
        />
      </S.JournalDetail>
    </>
  );
};

export default JournalDetail;
