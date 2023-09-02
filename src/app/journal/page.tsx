'use client';

import { Hero } from '@/components';

export default function Journal() {
  return (
    <>
      <Hero
        title={`writing into\nthe void.`}
        subtitle="an internet-web journal by <u>badi</u>"
        page="journal"
        classNames={{
          title: 'lg:!text-[76px] font-serif',
        }}
      />
    </>
  );
}
