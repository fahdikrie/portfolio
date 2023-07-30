'use client';

import { useEffect } from 'react';

import { Gradient } from '@/components';
import styles from '@/styles/page.module.css';

export default function Home() {
  useEffect(() => {
    const gradient3 = new Gradient();

    // @ts-ignore
    gradient3.initGradient('#gradient3-canvas');
  }, []);

  return (
    <>
      {/* <div className="overflow-hidden w-screen h-screen"></div> */}

      <div className="absolute top-0 -z-10 flex h-screen w-screen">
        <div className="flex h-full w-[45%] items-center justify-start border-r-2 border-neutral text-left">
          <canvas
            id="gradient3-canvas"
            className={styles.gradient3_canvas}
            data-transition-in
          />
          <div className="absolute ml-8 flex flex-col gap-2 text-primary opacity-90">
            <h1 className="whitespace-pre text-[100px] font-black leading-[1.15]">
              {`out in\nthe open.`}
            </h1>
            <h6 className="text-3xl font-bold">
              tech-blogs and learning notes
            </h6>
          </div>
        </div>
        <div className="h-screen w-[55%] bg-base-100"></div>
      </div>
    </>
  );
}
