import { NotionRenderer } from 'react-notion-x';
import { JournalDetailComponentProps } from 'types/pages';
import Header from './Header';

import * as S from './index.style';

const JournalDetail = ({
  post,
  postRecordMap,
  mapPageUrl,
}: JournalDetailComponentProps) => {
  return (
    <S.JournalDetail>
      <Header post={post} />
      <NotionRenderer recordMap={postRecordMap} mapPageUrl={mapPageUrl} />
    </S.JournalDetail>
  );
};

export default JournalDetail;
