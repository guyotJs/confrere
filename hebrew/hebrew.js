let german = JSON.parse(`
[
    {
    "g": "Ela ___ ao supermercado onte.",
    "e": "She went to the supermarket yesterday.",
    "a": ["iría", false],
    "b": ["vai", false],
    "c": ["irá", false],
    "d": ["foi", true]
  },
]
`);
german.sort(() => Math.random() - 0.5);