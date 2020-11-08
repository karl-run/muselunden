import type { NowRequest, NowResponse } from '@vercel/node';
import { createName } from '../utils/shared/common';

export default (request: NowRequest, response: NowResponse) => {
  response.status(200).send(JSON.stringify({ muselunden: createName() }));
};
