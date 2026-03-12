import type { PropsWithChildren } from 'react';

const PageContent = ({ children }: PropsWithChildren) => (
  <div className="mx-auto flex min-h-[calc(100dvh-106px)] w-full max-w-7xl items-center px-4">{children}</div>
);

export default PageContent;
