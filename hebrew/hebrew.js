let german = JSON.parse(`
[
    {
    "g": "",
    "e": "",
    "a": ["iría", false],
    "b": ["vai", false],
    "c": ["irá", false],
    "d": ["foi", true]
  },
]
`);
german.sort(() => Math.random() - 0.5);