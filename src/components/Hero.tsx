'use client';

import { useEffect } from 'react';

import { Gradient } from '@/components';
import styles from '@/styles/hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  useEffect(() => {
    const gradient = new Gradient();

    // @ts-ignore
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <div className="absolute top-0 -z-10 flex h-screen w-screen">
      <div
        className={`
          relative flex h-full w-[45%] items-center
          justify-start border-r-2 border-primary
          border-opacity-50
          text-left
        `}
      >
        <canvas
          id="gradient-canvas"
          className={styles.gradient_canvas}
          data-transition-in
        />
        <div className="absolute ml-8 flex flex-col gap-2 text-primary opacity-80">
          <h1 className="whitespace-pre text-[100px] font-black leading-[1.15]">
            {title}
          </h1>
          {!!subtitle && <h6 className="text-3xl font-bold">{subtitle}</h6>}
        </div>
      </div>
      <div className="h-screen w-[55%] bg-base-100"></div>
    </div>
  );
};

export { Hero };
export type { HeroProps };
export default Hero;
