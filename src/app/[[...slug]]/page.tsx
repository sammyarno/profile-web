import { ClientOnly } from './client';

export function generateStaticParams() {
  return [{ slug: [] }, { slug: ['about'] }, { slug: ['contact'] }, { slug: ['projects'] }];
}

export default function Page() {
  return <ClientOnly />;
}
