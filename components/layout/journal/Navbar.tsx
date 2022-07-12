import { useTheme } from 'next-themes';

import { ThemeButton } from '../regular/Navbar.style';
import * as S from './Navbar.style';

const JournalNavbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const onSetTheme = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  if (!resolvedTheme) return <></>;

  return (
    <S.JournalNavbar>
      <div>Back</div>
      <ThemeButton
        onClick={() => onSetTheme()}
        isLightTheme={resolvedTheme === 'light'}
      />
    </S.JournalNavbar>
  );
};

export default JournalNavbar;
