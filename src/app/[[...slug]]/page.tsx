import { ClientOnly } from './client';

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['about'] },
    { slug: ['contact'] },
    { slug: ['projects'] },
    { slug: ['utilities'] },
    { slug: ['utilities', 'split-bill'] },
    { slug: ['utilities', 'json-visualization'] },
  ];
}

export default function Page() {
  return <ClientOnly />;
}
