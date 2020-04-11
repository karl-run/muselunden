import { NowRequest, NowResponse } from "@now/node";

import { WordVotes } from "../utils/mongo";

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
