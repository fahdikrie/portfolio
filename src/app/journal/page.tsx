'use client';

import { Hero } from '@/components';

export default function About() {
  return (
    <>
      <Hero
        title={`writing into\nthe void.`}
        subtitle="an internet-web journal by <u>badi</u>"
        className="font-serif"
        classNames={{
          title: '!text-[84px]',
          subtitle: '!text-3xl font-semibold',
        }}
      />
    </>
  );
}
