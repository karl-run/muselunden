import { NowRequest, NowResponse } from '@now/node'
import { createName } from '../utils/common';

export default (request: NowRequest, response: NowResponse) => {
  response.status(200).send(JSON.stringify({ muselunden: createName() }));
};
