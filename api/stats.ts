import type { NowRequest, NowResponse } from '@vercel/node';

import { WordVotes } from '../utils/api/mongo';

export default async (request: NowRequest, response: NowResponse) => {
  const words = await WordVotes.find({});

  const cleanWords = words.map(({ word, viewed, up, down }) => ({
    word,
    viewed,
    up,
    down,
  }));

  response.status(200).send(JSON.stringify({ stats: cleanWords }));
};
