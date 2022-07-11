import Hero from './Hero';
import Feed from './Feed';
import * as S from './index.style';
import { ExtendedRecordMap } from 'notion-types';

const Journal = ({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}): JSX.Element => (
  <S.Journal>
    <Hero />
    <Feed recordMap={recordMap} />
  </S.Journal>
);

export default Journal;
