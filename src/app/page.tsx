'use client';

import { Hero } from '@/components';

export default function Home() {
  return (
    <>
      <Hero
        page="home"
        title={`fahdii <span>—</span>\najmalal f.`}
        subtitle={`software engineer based in jakarta 🇮🇩`}
        classNames={{
          hero: '!text-left !h-[calc(100dvh+4px)]',
        }}
      />
    </>
  );
}
