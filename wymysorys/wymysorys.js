let german = JSON.parse(`
[
  {
    "g": "Sy ___ tsu mark ônt.",
    "e": "She went to the market yesterday.",
    "a": ["is ganga", true],
    "b": ["gêt", false],
    "c": ["wêrd ganga", false],
    "d": ["geng", false]
  },
  {
    "g": "Miar ___ ful kal ôy morn.",
    "e": "We were very cold this morning.",
    "a": ["hoba ghabt", true],
    "b": ["hobm", false],
    "c": ["wêrdn hobm", false],
    "d": ["hobta", false]
  },
  {
    "g": "Du ___ di tür tsu fyr’t ganga?",
    "e": "Did you close the door before leaving?",
    "a": ["hast zugemacht", true],
    "b": ["zumachst", false],
    "c": ["zumacha wîst", false],
    "d": ["zumachta", false]
  },
  {
    "g": "Zy ___ lernyn fyr d’prüfô.",
    "e": "They have to study for the exam.",
    "a": ["mössyn", true],
    "b": ["mussa", false],
    "c": ["mössa wêrdn", false],
    "d": ["mössata", false]
  },
  {
    "g": "Môrgn miar ___ tsu kinô.",
    "e": "Tomorrow we will go to the cinema.",
    "a": ["wêrdn ganga", true],
    "b": ["genga", false],
    "c": ["gengta", false],
    "d": ["gêt", false]
  },
  {
    "g": "Da buba ___ in’t park z’ spela.",
    "e": "The boy is playing in the park.",
    "a": ["ist", true],
    "b": ["was", false],
    "c": ["wêrd", false],
    "d": ["geng", false]
  },
  {
    "g": "Da lærara ___ d’aufgabn ônt.",
    "e": "The teacher corrected the homework yesterday.",
    "a": ["hot korrihyret", true],
    "b": ["korrighyrt", false],
    "c": ["wêrd korrighyrn", false],
    "d": ["korrighyrta", false]
  },
  {
    "g": "Wên ___ du tsu doktôr?",
    "e": "When did you go to the doctor?",
    "a": ["bist ganga", true],
    "b": ["gêst", false],
    "c": ["wêrdst ganga", false],
    "d": ["gengta", false]
  },
  {
    "g": "Miar ___ a ný kôrw ôkôft.",
    "e": "We bought a new car.",
    "a": ["hoba ôkôft", true],
    "b": ["kôftn", false],
    "c": ["kôftata", false],
    "d": ["wêrdn ôkôfa", false]
  },
  {
    "g": "Zy ___ in’t miâr gschwûmt.",
    "e": "They swam in the lake.",
    "a": ["hoba gschwûmt", true],
    "b": ["schwymt", false],
    "c": ["schwymta", false],
    "d": ["wêrdn schwymn", false]
  }
]  
`);
german.sort(() => Math.random() - 0.5);

