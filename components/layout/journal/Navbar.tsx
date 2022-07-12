import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import { ThemeButton } from '../regular/Navbar.style';
import * as S from './Navbar.style';

import BackArrowWhiteImg from 'public/assets/back-arrow-white.svg';
import BackArrowBlackImg from 'public/assets/back-arrow-black.svg';

const JournalNavbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isLightMode = resolvedTheme === 'light';
  const router = useRouter();

  const onSetTheme = () => {
    if (isLightMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  if (!resolvedTheme) return <></>;

  return (
    <S.JournalNavbar>
      <div onClick={() => router.push('/journal')}>
        <img
          src={isLightMode ? BackArrowBlackImg : BackArrowWhiteImg}
          alt="back-arrow-img"
        />
      </div>
      <ThemeButton onClick={() => onSetTheme()} isLightTheme={isLightMode} />
    </S.JournalNavbar>
  );
};

export default JournalNavbar;
