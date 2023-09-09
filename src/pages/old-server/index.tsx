import Timer from '@rsc-demo/components/timer';
import { slowResponse } from '@rsc-demo/utils/slow-response';
import React, { useEffect, useState } from 'react';

const MimicServer = () => {
  const [resp, setResp] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);
  useEffect(() => {
    setLoader(true);
    slowResponse(5000).then((serverResp) => {
      setResp(serverResp);
      setLoader(false);
    });
  }, []);

  return (
    <div id="server-component">
      {loader ? <div>Server loading....</div> : resp}{' '}
    </div>
  );
};

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <MimicServer />
        <Timer id="server-component" />
      </div>
    </main>
  );
}

export default Page;
