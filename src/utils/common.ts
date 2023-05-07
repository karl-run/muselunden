import { safeLowerCase } from "./tsUtils";

type Muse = (typeof muse)[number];
export const muse = [
  "Muse",
  "Fitte",
  "Glufse",
  "Høne",
  "Dotte",
  "Dåse",
  "Vagina",
  "Kuse",
  "Biffgardin",
  "Fette",
  "Vulva",
  "Pussy",
  "Cunte",
  "Queefeapparat",
  "Bollefisse",
] as const;

type Lunden = (typeof lunden)[number];
export const lunden = [
  "Lunden",
  "Skrenten",
  "Berget",
  "Ruden",
  "Bråten",
  "Dynga",
  "Haugen",
  "Klippen",
  "Dalen",
  "Mo",
  "Enga",
  "Stad",
  "Heim",
  "Tunet",
  "Gard",
] as const;

type Result = `${Muse}${Lowercase<Lunden>}`;

function pickRandom(list: typeof muse): Muse;
function pickRandom(list: typeof lunden): Lunden;
function pickRandom(list: typeof muse | typeof lunden): Muse | Lunden {
  const item = list[Math.floor(Math.random() * list.length)];

  if (!item) {
    throw new Error("Illegal array access: should be impossible");
  }

  return item;
}

export const createName = (): Result =>
  `${pickRandom(muse)}${safeLowerCase(pickRandom(lunden))}`;
