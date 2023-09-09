import { slowResponse } from '@rsc-demo/utils/slow-response';
import React from 'react';

async function Server() {
  const serverResp = await slowResponse(5000);
  return serverResp;
}

export default Server;
