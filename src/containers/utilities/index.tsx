import Link from 'next/link';

const Utilities = () => (
  <div className="mx-auto flex min-h-[calc(100dvh-146.5px)] w-full max-w-7xl flex-col items-start gap-6 py-8 md:min-h-[calc(100dvh-106px)]">
    <div className="flex w-full flex-col items-start">
      <div className="flex w-full flex-col items-start p-4">
        <h4 className="font-fira text-primary mb-6 text-2xl tracking-wider">PublishedPackage()</h4>
        <div className="flex flex-col gap-4">
          <a
            className="border-primary border px-3 py-2 capitalize"
            target="_blank"
            href="https://www.npmjs.com/package/rolling-wheel"
            rel="noreferrer"
          >
            <p className="text-center font-bold tracking-wide">Rolling Wheel</p>
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start p-4">
        <h4 className="font-fira text-primary mb-6 text-2xl tracking-wider">MiniUtils()</h4>
        <div className="flex gap-4">
          <Link className="border-primary border px-3 py-2" href="/utilities/split-bill">
            <p className="text-center font-bold tracking-wider capitalize">Split Bill</p>
          </Link>
          <Link className="border-primary border px-3 py-2" href="/utilities/json-visualization">
            <p className="text-center font-bold tracking-wider capitalize">JSON Visualization</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Utilities;
