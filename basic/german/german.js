let con = [false];
let german = JSON.parse(`
[
    {
        "g": "Der Mann ___ das Wasser.",
        "e": "The man drinks the water.",
        "a": ["trinkt", true],
        "b": ["trinken", false],
        "c": ["trank", false],
        "d": ["getrunken", false]
    },
    {
        "g": "Das Haus ist sehr ___.",
        "e": "The house is very big.",
        "a": ["groß", true],
        "b": ["klein", false],
        "c": ["lang", false],
        "d": ["neu", false]
    },
    {
        "g": "Der Ball ist ___ dem Tisch.",
        "e": "The ball is under the table.",
        "a": ["unter", true],
        "b": ["auf", false],
        "c": ["über", false],
        "d": ["neben", false]
    },
    {
        "g": "Das Wasser ist ___.",
        "e": "The water is cold.",
        "a": ["kalt", true],
        "b": ["warm", false],
        "c": ["weich", false],
        "d": ["schnell", false]
    },
    {
        "g": "Die Tür ist ___.",
        "e": "The door is open.",
        "a": ["offen", true],
        "b": ["geschlossen", false],
        "c": ["klar", false],
        "d": ["hell", false]
    },
    {
        "g": "Ich sehe eine ___ Blume.",
        "e": "I see a red flower.",
        "a": ["rote", true],
        "b": ["rot", false],
        "c": ["roter", false],
        "d": ["rotes", false]
    },
    {
        "g": "Das Kind hat einen ___ Hund.",
        "e": "The child has a small dog.",
        "a": ["kleinen", true],
        "b": ["klein", false],
        "c": ["kleines", false],
        "d": ["kleine", false]
    },
    {
        "g": "Der Apfel ist ___.",
        "e": "The apple is green.",
        "a": ["grün", true],
        "b": ["gelb", false],
        "c": ["weiß", false],
        "d": ["braun", false]
    },
    {
        "g": "Sie geht ___ die Tür.",
        "e": "She goes through the door.",
        "a": ["durch", true],
        "b": ["bei", false],
        "c": ["zu", false],
        "d": ["nach", false]
    },
    {
        "g": "Der Mann ___ jeden Tag.",
        "e": "The man works every day.",
        "a": ["arbeitet", true],
        "b": ["arbeite", false],
        "c": ["arbeiten", false],
        "d": ["gearbeitet", false]
    },
    {
        "g": "Das Fenster ist ___.",
        "e": "The window is clean.",
        "a": ["sauber", true],
        "b": ["schmutzig", false],
        "c": ["klar", false],
        "d": ["stark", false]
    }
]
`);
german.sort(() => Math.random() - 0.5);
