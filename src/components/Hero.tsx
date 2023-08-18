'use client';

import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Gradient } from '@/components';
import styles from '@/styles/hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  className?: React.ComponentProps<'div'>['className'];
  classNames?: {
    title: React.ComponentProps<'h1'>['className'];
    subtitle: React.ComponentProps<'h1'>['className'];
  };
}

const Hero = ({ title, subtitle, className, classNames }: HeroProps) => {
  const [theme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    const gradient = new Gradient();

    // @ts-ignore
    gradient.initGradient('#gradient-canvas');
  }, [theme]);

  return (
    <div className={`absolute top-0 -z-10 flex h-screen w-screen ${className}`}>
      <div
        className={`
          relative flex h-full w-[45%] items-center
          justify-start border-r-2 border-black
          text-left dark:border-white
        `}
      >
        <canvas
          id="gradient-canvas"
          className={styles.gradient_canvas}
          data-transition-in
        />
        <div className="absolute inset-0 dark:bg-black dark:opacity-30" />
        <div className="absolute flex w-full flex-col gap-2 p-16 text-gray-900 opacity-95 dark:text-white">
          <h1
            className={`
              whitespace-pre text-[40px] font-black
              leading-[1.15] lg:text-[64px] xl:text-[96px]
              ${classNames?.title}
            `}
          >
            {title}
          </h1>
          {!!subtitle && (
            <h6
              className={`text-3xl font-bold ${classNames?.subtitle}`}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
        </div>
      </div>
      <div className="h-screen w-[55%] bg-base-100"></div>
    </div>
  );
};

export { Hero };
export type { HeroProps };
export default Hero;
