import { NowRequest, NowResponse } from "@now/node";
import fetch from "node-fetch";
import { createName } from "../utils/common";

export default async (request: NowRequest, response: NowResponse) => {
  if (!request.body) {
    response.status(400).send(JSON.stringify({ message: "Invalid request" }));
    return;
  }

  if (request.body.challenge) {
    console.info("Received slack challenge");
    response.status(200);
    response.setHeader("content-type", "text/plain");
    response.send(request.body.challenge);
    return;
  }

  if (request.body.event.channel !== "CNA4FLQ7L") {
    console.warn("Not from sendplate channel, ignoring");
    response.status(200);
    response.send(JSON.stringify({ message: "OK" }));
    return;
  }

  if (!!request.body.event.bot_profile) {
    console.info("Not a human, not responding");
    response.status(200);
    response.send(JSON.stringify({ message: "OK" }));
    return;
  }

  if (!request.body.event.text.toLowerCase().includes("muselunden")) {
    console.info("This doesn't look like anything to me");
    response.status(200);
    response.send(JSON.stringify({ message: "OK" }));
    return;
  }

  const message = `Muselunden? Du mener vel ${createName()}`;
  await fetch(
    `https://slack.com/api/chat.postMessage?token=${process.env.SLACK_TOKEN}&channel=${request.body.event.channel}&text=${message}&pretty=1`,
    {
      method: "GET"
    }
  )
    .then(res => res.json())
    .then(res => {
      if (!res.ok) {
        console.error("Slack is sad", res);
        return;
      }

      console.info("Slack says", res);
    })
    .catch(e => {
      console.error(e);
    });

  response.status(200);
  response.send(JSON.stringify({ message: "OK" }));
};
