import About from '@/containers/About';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Samuel Arno Saputra — experience, skills, and services as a web engineer.',
};

export default function AboutPage() {
  return <About />;
}
