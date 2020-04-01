const muse = [
  "Muse",
  "Fitte",
  "Glufse",
  "Høne",
  "Dotte",
  "Dåse",
  "Vagina",
  "Kuse"
];

const lunden = [
  "Lunden",
  "Skrenten",
  "Berget",
  "Ruden",
  "Bråten",
  "Dynga",
  "Haugen",
  "Klippen"
];

const pickRandom = (list: string[]) => list[Math.floor(Math.random() * list.length)];

export const createName = (): string =>
  `${pickRandom(muse)}${pickRandom(lunden).toLowerCase()}`;
