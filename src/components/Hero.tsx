'use client';

import clsx from 'clsx';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Footer, Gradient, Navbar } from '@/components';
import styles from '@/styles/hero.module.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  className?: React.ComponentProps<'div'>['className'];
  classNames?: {
    hero?: React.ComponentProps<'div'>['className'];
    title?: React.ComponentProps<'h1'>['className'];
    subtitle?: React.ComponentProps<'h1'>['className'];
  };
  page: string;
  children?: React.ReactNode | JSX.Element;
  customChildren?: React.ReactNode | JSX.Element;
}

const Hero = ({
  title,
  subtitle,
  className,
  classNames,
  page,
  children,
  customChildren,
}: HeroProps) => {
  const [theme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    if (!theme || !page) return;

    const gradient = new Gradient();

    // @ts-ignore
    gradient.amp = 100;
    // @ts-ignore
    gradient.initGradient(`#gradient-canvas__${page}`);
  }, [page, theme]);

  return (
    <div className={clsx('top-0 -z-10 w-screen lg:flex', className ?? '')}>
      <div
        className={clsx(
          'relative flex h-[280px] w-screen items-center justify-start border-b-2',
          'border-gray-900 border-opacity-95 text-center dark:border-off-white',
          'lg:h-screen lg:w-[40%] lg:max-w-[600px]',
          'lg:border-b-0 lg:border-r-2 lg:text-left',
          classNames?.hero
        )}
      >
        <canvas
          id={`gradient-canvas__${page}`}
          className={clsx(
            styles.gradient_canvas,
            styles[`gradient_canvas__${page}`]
          )}
          data-transition-in
        />
        <div className="absolute inset-0 bg-gray-500 opacity-10 dark:bg-black dark:opacity-40" />
        <div
          className={clsx(
            'absolute flex h-full w-full flex-col justify-end gap-2 p-4 text-gray-900',
            'opacity-95 dark:text-off-white lg:p-8'
          )}
        >
          {customChildren ?? (
            <>
              <h1
                className={clsx(
                  'whitespace-pre text-[56px] font-black leading-[1.15] lg:text-[64px]',
                  'xl:text-[80px] [&>span]:hidden lg:[&>span]:inline',
                  classNames?.title
                )}
                dangerouslySetInnerHTML={{ __html: title ?? '' }}
              />
              {!!subtitle && (
                <h6
                  className={clsx(
                    'mt-1 whitespace-pre text-lg font-medium lg:text-xl',
                    classNames?.subtitle
                  )}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
              )}
            </>
          )}
        </div>
      </div>
      <div
        className={clsx(
          'relative right-0 w-screen bg-base-100',
          'lg:h-screen lg:w-[60%] lg:overflow-scroll 2xl:w-full'
        )}
      >
        <Navbar />
        <div
          className={clsx(
            'left-0 right-0 top-0 p-4',
            'lg:absolute lg:mx-auto lg:max-w-[600px]',
            'lg:px-0 lg:pt-[88px] 2xl:max-w-[900px]'
          )}
        >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export { Hero };
export type { HeroProps };
export default Hero;
