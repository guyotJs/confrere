let con = [true,["../con/galician_present.html","Present"]];
let german = JSON.parse(`
[
  {
    "g": "Ela ___ ao supermercado onte.",
    "e": "She went to the supermarket yesterday.",
    "a": ["foi", true],
    "b": ["vai", false],
    "c": ["irá", false],
    "d": ["iría", false]
  },
  {
    "g": "Nós ___ moito frío esta mañá.",
    "e": "We were very cold this morning.",
    "a": ["tivemos", true],
    "b": ["temos", false],
    "c": ["teremos", false],
    "d": ["tiñamos", false]
  },
  {
    "g": "Ti ___ a porta antes de saír?",
    "e": "Did you close the door before leaving?",
    "a": ["pechaches", true],
    "b": ["pechas", false],
    "c": ["pechabas", false],
    "d": ["pecharás", false]
  },
  {
    "g": "Eles ___ estudar para o exame.",
    "e": "They have to study for the exam.",
    "a": ["teñen que", true],
    "b": ["tiveron que", false],
    "c": ["tiñan que", false],
    "d": ["terán que", false]
  },
  {
    "g": "Mañá nós ___ ao cine.",
    "e": "Tomorrow we will go to the cinema.",
    "a": ["iremos", true],
    "b": ["imos", false],
    "c": ["fomos", false],
    "d": ["iamos", false]
  },
  {
    "g": "O neno ___ xogando no parque.",
    "e": "The boy is playing in the park.",
    "a": ["está", true],
    "b": ["estaba", false],
    "c": ["estará", false],
    "d": ["estivo", false]
  },
  {
    "g": "A profesora ___ a tarefa onte.",
    "e": "The teacher corrected the homework yesterday.",
    "a": ["corrixiu", true],
    "b": ["corrixe", false],
    "c": ["corrixía", false],
    "d": ["corrixirá", false]
  },
  {
    "g": "Cando ___ ti ao médico?",
    "e": "When did you go to the doctor?",
    "a": ["fuches", true],
    "b": ["vas", false],
    "c": ["iras", false],
    "d": ["irías", false]
  },
  {
    "g": "Nós ___ un coche novo.",
    "e": "We bought a new car.",
    "a": ["compramos", true],
    "b": ["compraremos", false],
    "c": ["comprabamos", false],
    "d": ["compriamos", false]
  },
  {
    "g": "Eles ___ no mar toda a tarde.",
    "e": "They swam in the sea all afternoon.",
    "a": ["nadaron", true],
    "b": ["nadan", false],
    "c": ["nadaban", false],
    "d": ["nadarán", false]
  }
]
`);
german.sort(() => Math.random() - 0.5);
