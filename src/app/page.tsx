'use client';

import { Hero } from '@/components';

const CustomHeroChildren = (
  <>
    <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">
      IKI DODOlan
    </h1>
    <p>nopo sodwaaqwooh</p>
  </>
);

export default function Home() {
  return (
    <>
      <Hero page="home" customChildren={CustomHeroChildren} />
    </>
  );
}
