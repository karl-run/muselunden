const markWordSeen = async (word: string) => {
  await fetch('/api/vote/view', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ word }),
  });
};

type LoadWordResponse = { muselunden: string };

export const loadWord = async (): Promise<LoadWordResponse> => {
  const result: LoadWordResponse = await fetch('/api/api').then((res) => res.json());

  await markWordSeen(result.muselunden);

  return result;
};

export const upvoteWord = async (word: string) => {
  await fetch('/api/vote/up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ word }),
  });
};

export const downvoteWord = async (word: string) => {
  await fetch('/api/vote/down', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ word }),
  });
};
