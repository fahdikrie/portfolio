import { NotionRenderer } from 'react-notion-x';
import ProgressBar from 'react-scroll-progress-bar';
import { useTheme } from 'next-themes';

import { JournalDetailComponentProps } from 'types/pages';
import * as S from './index.style';
import Header from './Header';

const JournalDetail = ({
  post,
  postRecordMap,
  mapPageUrl,
}: JournalDetailComponentProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <ProgressBar
        bgcolor={resolvedTheme === 'light' ? '#513203' : '#bb19bb'}
      />
      <S.JournalDetail>
        <Header post={post} />
        <NotionRenderer recordMap={postRecordMap} mapPageUrl={mapPageUrl} />
      </S.JournalDetail>
    </>
  );
};

export default JournalDetail;
