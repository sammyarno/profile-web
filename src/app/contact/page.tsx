import Contact from '@/containers/Contact';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Samuel Arno Saputra for web development projects and collaborations.',
};

export default function ContactPage() {
  return <Contact />;
}
