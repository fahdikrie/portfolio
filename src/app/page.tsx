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

      <div className="w-screen h-screen flex absolute top-0 -z-10">
        <div className="w-[45%] h-full text-left flex items-center justify-start shadow">
          <canvas
            id="gradient3-canvas"
            className={styles.gradient3_canvas}
            data-transition-in
          />
          <div className="absolute text-neutral opacity-90 flex flex-col gap-2 ml-8">
            <h1 className="font-black text-[100px] leading-[1.15] whitespace-pre">
              {`out in\nthe open.`}
            </h1>
            <h6 className="font-bold text-3xl">
              tech-blogs and learning notes
            </h6>
          </div>
        </div>
        <div className="w-[55%] h-screen bg-base-100"></div>
      </div>
    </>
  );
}
