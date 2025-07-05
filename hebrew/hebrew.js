let german = JSON.parse(`
[
  {
    "g": "Hi",
    "e": "Hi",
    "a": ["iría", false],
    "b": ["vai", false],
    "c": ["irá", false],
    "d": ["foi", true]
  },
]
`);
german.sort(() => Math.random() - 0.5);