import type { NowRequest, NowResponse } from '@vercel/node';

import { WordVotes } from '../utils/api/mongo';

const handleView = async (word: string) => {
  const result = await WordVotes.findOne({ word });

  if (!result) {
    console.info('New unseen word');
    await new WordVotes({
      word,
      viewed: 1,
      up: 0,
      down: 0,
    }).save();
    console.info('Saved new word ' + word);
    return;
  }

  result.viewed = result.viewed + 1;

  await result.save();
};

const handleUpvote = async (word: string) => {
  console.info('New upvote for ' + word);
  const result = await WordVotes.findOne({ word });

  if (!result) {
    throw Error("Can't upvote unseen word");
  }

  result.up = result.up + 1;

  await result.save();
  console.info('Saved upvote for ' + word);
};

const handleDownvote = async (word: string) => {
  console.info('New downvote for ' + word);
  const result = await WordVotes.findOne({ word });

  if (!result) {
    throw Error("Can't downvote unseen word");
  }

  result.down = result.down + 1;

  await result.save();
  console.info('New downvote for ' + word);
};

export default async (request: NowRequest, response: NowResponse) => {
  if (!request.body) {
    response.status(400).send(JSON.stringify({ message: 'Invalid request' }));
    return;
  }

  if (!request.body.word) {
    response.status(400).send(JSON.stringify({ message: 'Invalid request body' }));
    return;
  }

  switch (request.query.action) {
    case 'up': {
      await handleUpvote(request.body.word);
      break;
    }
    case 'down': {
      await handleDownvote(request.body.word);
      break;
    }
    case 'view': {
      await handleView(request.body.word);
      break;
    }
    default: {
      response.status(400).send(JSON.stringify({ message: 'Invalid path' }));
      return;
    }
  }

  response.status(200).send(JSON.stringify({ message: 'OK' }));
};
