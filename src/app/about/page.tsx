'use client';

import { Hero } from '@/components';

export default function About() {
  return (
    <>
      <Hero
        title={`a little <span>—</span>\nabout me.`}
        subtitle="short bio, experience, education, etc."
        page="about"
      />
    </>
  );
}
