let con = [true,["../con/catalan_present.html","Present"]]
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
    "a": ["tunca", false],
    "b": ["tancaràs", false],
    "c": ["tancar", true],
    "d": ["tancaves", false]
  },
  {
    "g": "Ells ___ de estudiar per a l'examen.",
    "e": "They have to study for the exam.",
    "a": ["han", true],
    "b": ["van haver", false],
    "c": ["havien", false],
    "d": ["hauran", false]
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
  },
  {
    "g": "Al principi, ___ va crear el cel i la terra.",
    "e": "In the beginning, God created the heavens and the earth.",
    "a": ["Deo", false],
    "b": ["Dei", false],
    "c": ["Dios", false],
    "d": ["Déu", true]
  },
  {
    "g": "Per ___ estudies català?",
    "e": "Why are you studying Catalan?",
    "a": ["quoi", false],
    "b": ["qei", false],
    "c": ["cuando", false],
    "d": ["què", true]
  },
  {
    "g": "Teniu alguna ___ disponible?",
    "e": "Do you have any rooms available?",
    "a": ["habitació", true],
    "b": ["espesce", false],
    "c": ["lloc", false],
    "d": ["avió", false]
  },
  {
    "g": "Quant costa ___ habitació per a una persona?",
    "e": "How much does a room for one person cost?",
    "a": ["um", false],
    "b": ["una", true],
    "c": ["eles", false],
    "d": ["el", false]
  },
  {
    "g": "Si us ___, netegeu la meva habitació.",
    "e": "Please clean my room.",
    "a": ["plau", true],
    "b": ["palau", false],
    "c": ["macau", false],
    "d": ["plai", false]
  },
  {
    "g": "Vull un ___ que tingui formatge.",
    "e": "I want a plate that has cheese.",
    "a": ["cullera", false],
    "b": ["plat", true],
    "c": ["tassa", false],
    "d": ["escriure", false]
  },
  {
    "g": "___ costa això?",
    "e": "How much does this cost?",
    "a": ["Que", false],
    "b": ["Quand", false],
    "c": ["Quo", false],
    "d": ["Quant", true]
  },
  {
    "g": "No he ___ res de dolent.",
    "e": "I haven't done anything wrong.",
    "a": ["faré", false],
    "b": ["fer", false],
    "c": ["fet", true],
    "d": ["haurà", false]
  },
  {
    "g": "Vull ___ amb un advocat.",
    "e": "I want to speak to a lawyer.",
    "a": ["parlo", false],
    "b": ["paralamos", false],
    "c": ["falan", false],
    "d": ["parlar", true]
  },
  {
    "g": "Puc simplement pagar una ___ ara?",
    "e": "Can I just pay a fine now?",
    "a": ["pot", false],
    "b": ["multa", true],
    "c": ["hola", false],
    "d": ["tres bé", false]
  }
]

`);
german.sort(() => Math.random() - 0.5);
