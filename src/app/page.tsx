import Server from '@rsc-demo/components/server';
import Timer from '@rsc-demo/components/timer';
import Image from 'next/image';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div id="server-new-comp">
          {' '}
          <Suspense fallback={'Server loading....'}>
            <Server />
          </Suspense>
        </div>

        <Timer id="server-new-comp" />
      </div>
    </main>
  );
}
