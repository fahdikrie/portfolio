'use client';

import { useEffect } from 'react';

import { Gradient } from '@/components';
import styles from '@/styles/page.module.css';

export default function Home() {
  useEffect(() => {
    // const gradient1 = new Gradient();
    // const gradient2 = new Gradient();
    const gradient3 = new Gradient();

    // // @ts-ignore
    // gradient1.initGradient('#gradient1-canvas');

    // // @ts-ignore
    // gradient2.initGradient('#gradient2-canvas');

    // @ts-ignore
    gradient3.initGradient('#gradient3-canvas');
  }, []);

  return (
    <>
      <div className="overflow-hidden w-screen h-screen">
        {/* <div className="absolute top-0 left-0 -z-10">
          <canvas
            id="gradient1-canvas"
            className={styles.gradient1_canvas}
            data-transition-in
          />
          <div className={`${styles.gradient1_triangle_cutout} shadow-inner`} />
        </div>
        <div className="absolute bottom-0 right-0 -z-20">
          <canvas
            id="gradient2-canvas"
            className={styles.gradient2_canvas}
            data-transition-in
          />
          <div className={`${styles.gradient2_triangle_cutout} shadow-inner`} />
        </div> */}
      </div>

      <div className="w-screen h-screen flex bg-blue-100">
        <div className="w-[45%] h-screen text-left flex items-center justify-center">
          <canvas
            id="gradient3-canvas"
            className={styles.gradient3_canvas}
            data-transition-in
          />
          <div className="absolute">
            <h1 className="text-white font-black text-[100px] mix-blend-difference leading-[1.15] whitespace-pre">
              {`out in\nthe open.`}
            </h1>
            <h6 className="mt-2 text-white font-bold text-3xl mix-blend-difference">
              tech-blogs and learning notes
            </h6>
          </div>
        </div>
        <div className="w-[55%] h-screen bg-white"></div>
      </div>
    </>
  );
}
