let german = JSON.parse(`
[
  {
    "g":"Ik ga weg, -- je het niet erg vindt",
    "e":"I'm leaving, if you don't mind.",
    "a":["als",true],
    "b":["ob",false],
    "c":["naar",false],
    "d":["gaan",false]
  }
]
`);
german.sort(() => Math.random() - 0.5);
