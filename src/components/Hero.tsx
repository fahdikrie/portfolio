'use client';

import clsx from 'clsx';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Gradient, Navbar } from '@/components';
import styles from '@/styles/hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  className?: React.ComponentProps<'div'>['className'];
  classNames?: {
    title: React.ComponentProps<'h1'>['className'];
    subtitle: React.ComponentProps<'h1'>['className'];
  };
  page: string;
}

const Hero = ({ title, subtitle, className, classNames, page }: HeroProps) => {
  const [theme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    if (!theme || !page) return;

    const gradient = new Gradient();

    // @ts-ignore
    gradient.initGradient(`#gradient-canvas__${page}`);
  }, [page, theme]);

  return (
    <div className={`absolute top-0 -z-10 flex h-screen w-screen ${className}`}>
      <div
        className={`
          relative flex h-full w-[40%] items-center
          justify-start border-r-4 border-gray-900
          border-opacity-95 text-left dark:border-off-white
        `}
      >
        <canvas
          id={`gradient-canvas__${page}`}
          className={clsx(
            styles.gradient_canvas,
            styles[`gradient_canvas__${page}`]
          )}
          data-transition-in
        />
        <div className="absolute inset-0 bg-white opacity-50 dark:bg-black dark:opacity-0" />
        <div
          className={`
            absolute flex h-full w-full flex-col justify-end gap-2 p-8
            text-gray-900 opacity-95 dark:text-off-white
          `}
        >
          <h1
            className={`
              whitespace-pre text-[40px] font-black
              leading-[1.15] lg:text-[64px] xl:text-[80px]
              ${classNames?.title}
            `}
          >
            {title}
          </h1>
          {!!subtitle && (
            <h6
              className={`text-base font-bold md:text-lg lg:text-2xl ${classNames?.subtitle}`}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
        </div>
      </div>
      <div className="h-screen w-[60%] bg-base-100">
        <Navbar />
      </div>
    </div>
  );
};

export { Hero };
export type { HeroProps };
export default Hero;
