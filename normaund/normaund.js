let german = JSON.parse(`
[
  {
    "g": "Élle ___ au marché hier.",
    "e": "She went to the market yesterday.",
    "a": ["est alée", true],
    "b": ["va", false],
    "c": ["ira", false],
    "d": ["allait", false]
  },
  {
    "g": "Nouos ___ ben fret ch't' matin.",
    "e": "We were very cold this morning.",
    "a": ["avons eu", true],
    "b": ["avons", false],
    "c": ["aurons", false],
    "d": ["avions", false]
  },
  {
    "g": "Té ___ la pòrte avant d’parti?",
    "e": "Did you close the door before leaving?",
    "a": ["as fermé", true],
    "b": ["fermes", false],
    "c": ["fermeras", false],
    "d": ["fermais", false]
  },
  {
    "g": "Ils ___ étudier pour l’examin.",
    "e": "They have to study for the exam.",
    "a": ["doivent", true],
    "b": ["devaient", false],
    "c": ["duront", false],
    "d": ["ont dû", false]
  },
  {
    "g": "D’main, nouos ___ au cinéma.",
    "e": "Tomorrow we will go to the cinema.",
    "a": ["all’rons", true],
    "b": ["allons", false],
    "c": ["sommes allés", false],
    "d": ["allions", false]
  },
  {
    "g": "L’garchon ___ à jouer dans l’pré.",
    "e": "The boy is playing in the field.",
    "a": ["est", true],
    "b": ["était", false],
    "c": ["sera", false],
    "d": ["fut", false]
  },
  {
    "g": "La maîtresse ___ les devoirs hier.",
    "e": "The teacher corrected the homework yesterday.",
    "a": ["a corrigé", true],
    "b": ["corrige", false],
    "c": ["corrigera", false],
    "d": ["corrigeait", false]
  },
  {
    "g": "Quand t’___ chez l’docteur?",
    "e": "When did you go to the doctor?",
    "a": ["és allé", true],
    "b": ["vas", false],
    "c": ["iras", false],
    "d": ["allais", false]
  },
  {
    "g": "Nouos ___ un nêu char.",
    "e": "We bought a new car.",
    "a": ["avons acheté", true],
    "b": ["achetons", false],
    "c": ["achetions", false],
    "d": ["acheterons", false]
  },
  {
    "g": "I’s ___ dans la mè toute l’après-mé.",
    "e": "They swam in the sea all afternoon.",
    "a": ["ont nagé", true],
    "b": ["nagent", false],
    "c": ["nageront", false],
    "d": ["nageaient", false]
  }
]
`);
german.sort(() => Math.random() - 0.5);
