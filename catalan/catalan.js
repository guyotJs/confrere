let german = JSON.parse(`
[
  {
    "g": "Ella ___ al supermercat ahir.",
    "e": "She went to the supermarket yesterday.",
    "a": ["va anar", true],
    "b": ["va", false],
    "c": ["anirà", false],
    "d": ["anava", false]
  },
  {
    "g": "Nosaltres ___ molt de fred aquest matí.",
    "e": "We were very cold this morning.",
    "a": ["vam passar", true],
    "b": ["passem", false],
    "c": ["passarem", false],
    "d": ["passàvem", false]
  },
  {
    "g": "Vas ___ la porta abans de sortir?",
    "e": "Did you close the door before leaving?",
    "a": ["tancar", false],
    "b": ["tancaràs", false],
    "c": ["vas tancar", true],
    "d": ["tancaves", false]
  },
  {
    "g": "Ells ___ estudiar per a l'examen.",
    "e": "They have to study for the exam.",
    "a": ["han de", true],
    "b": ["van haver de", false],
    "c": ["havien de", false],
    "d": ["hauran de", false]
  },
  {
    "g": "Demà nosaltres ___ al cinema.",
    "e": "Tomorrow we will go to the cinema.",
    "a": ["anirem", true],
    "b": ["anem", false],
    "c": ["vam anar", false],
    "d": ["anàvem", false]
  },
  {
    "g": "El nen ___ jugant al parc.",
    "e": "The boy is playing in the park.",
    "a": ["està", true],
    "b": ["estava", false],
    "c": ["estarà", false],
    "d": ["va estar", false]
  },
  {
    "g": "La professora ___ els deures ahir.",
    "e": "The teacher corrected the homework yesterday.",
    "a": ["va corregir", true],
    "b": ["corregeix", false],
    "c": ["corregia", false],
    "d": ["corregirà", false]
  },
  {
    "g": "Quan ___ tu al metge?",
    "e": "When did you go to the doctor?",
    "a": ["hi vas anar", true],
    "b": ["hi vas", false],
    "c": ["hi aniràs", false],
    "d": ["hi anaves", false]
  },
  {
    "g": "Nosaltres ___ un cotxe nou.",
    "e": "We bought a new car.",
    "a": ["vam comprar", true],
    "b": ["comprem", false],
    "c": ["compràvem", false],
    "d": ["compraríem", false]
  },
  {
    "g": "Ells ___ al mar tota la tarda.",
    "e": "They swam in the sea all afternoon.",
    "a": ["van nedar", true],
    "b": ["nedaven", false],
    "c": ["neden", false],
    "d": ["nedaran", false]
  }
]

`);
german.sort(() => Math.random() - 0.5);
