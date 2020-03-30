const mus = [
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

const pickRandom = list => list[Math.floor(Math.random() * list.length)];

module.exports = (req, res) => {
  const name = `${pickRandom(mus)}${pickRandom(lunden).toLowerCase()}`;

  res.status(200).send(JSON.stringify({ muselunden: name }));
};
