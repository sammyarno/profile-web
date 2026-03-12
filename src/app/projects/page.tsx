import Projects from 'containers/Projects';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore the portfolio of projects built by Samuel Arno Saputra.',
};

export default function ProjectsPage() {
  return <Projects />;
}
