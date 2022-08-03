import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import { ThemeButton } from '../Regular/Navbar/Desktop.style';
import * as S from '@/components/layout/Blog/Navbar.style';

import BackArrowWhiteImg from 'public/assets/back-arrow-white.svg';
import BackArrowBlackImg from 'public/assets/back-arrow-black.svg';

const BlogNavbar = () => {
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
    <S.BlogNavbar>
      <div onClick={() => router.push('/blog')}>
        <img
          src={isLightMode ? BackArrowBlackImg : BackArrowWhiteImg}
          alt="back-arrow-img"
        />
      </div>
      <ThemeButton onClick={() => onSetTheme()} isLightTheme={isLightMode} />
    </S.BlogNavbar>
  );
};

export default BlogNavbar;
