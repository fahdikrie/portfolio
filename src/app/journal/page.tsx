'use client';

import { Hero } from '@/components';

export default function Journal() {
  return (
    <>
      <Hero
        title={`writing into\nthe void.`}
        subtitle="an internet-web journal by <u>badi</u>"
        page="journal"
        className="font-serif"
        classNames={{
          title: '!text-[72px]',
          subtitle: '!text-2xl',
        }}
      />
    </>
  );
}
