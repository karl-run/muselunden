export const muse = [
  'Muse',
  'Fitte',
  'Glufse',
  'Høne',
  'Dotte',
  'Dåse',
  'Vagina',
  'Kuse',
  'Biffgardin',
  'Fette',
  'Vulva',
  'Pussy',
  'Cunte',
  'Queefeapparat',
  'Bollefisse',
];

export const lunden = [
  'Lunden',
  'Skrenten',
  'Berget',
  'Ruden',
  'Bråten',
  'Dynga',
  'Haugen',
  'Klippen',
  'Dalen',
  'Mo',
  'Enga',
  'Stad',
  'Heim',
  'Tunet',
  'Gard',
];

export const pickRandom = (list: string[]) => list[Math.floor(Math.random() * list.length)];

export const createName = (): string => `${pickRandom(muse)}${pickRandom(lunden).toLowerCase()}`;
