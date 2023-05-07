import { createName } from "../utils/common";

export async function get() {
  return new Response(JSON.stringify({ name: createName() }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
