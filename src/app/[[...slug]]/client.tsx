'use client';

import dynamic from 'next/dynamic';

const App = dynamic(() => import('containers/App'), { ssr: false });

export function ClientOnly() {
  return <App />;
}
