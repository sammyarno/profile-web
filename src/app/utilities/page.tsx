import Utilities from '@/containers/utilities';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utilities',
  description: 'A collection of mini utilities and tools built by Samuel Arno Saputra.',
};

export default function UtilitiesPage() {
  return <Utilities />;
}
