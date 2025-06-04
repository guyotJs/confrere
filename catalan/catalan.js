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
    "g": "Quan ___ al metge?",
    "e": "When did you go to the doctor?",
    "a": ["vas anar", true],
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
  },
    {
    "g": "Jesús ___ amb els deixebles al temple.",
    "e": "Jesus spoke with the disciples at the temple.",
    "a": ["parlava", true],
    "b": ["parlen", false],
    "c": ["parlaré", false],
    "d": ["parlavares", false]
  },
  {
    "g": "Cada diumenge, la família ___ a l'església.",
    "e": "Every Sunday, the family went to church.",
    "a": ["va", false],
    "b": ["anava", true],
    "c": ["anarà", false],
    "d": ["vas", false]
  },
  {
    "g": "La Bíblia ___ moltes històries de fe.",
    "e": "The Bible has many stories of faith.",
    "a": ["té", true],
    "b": ["tenim", false],
    "c": ["teniarem", false],
    "d": ["tingui", false]
  },
  {
    "g": "Nosaltres ___ a Déu cada nit.",
    "e": "We pray to God every night.",
    "a": ["preguem", true],
    "b": ["pregava", false],
    "c": ["preguen", false],
    "d": ["pregares", false]
  },
  {
    "g": "Ells ___ el baptisme amb alegria.",
    "e": "They recieve baptism with joy.",
    "a": ["reben", true],
    "b": ["rebria", false],
    "c": ["rebia", false],
    "d": ["rebré", false]
  },
  {
    "g": "Déu ___ el món segons la Bíblia.",
    "e": "God created the world according to the Bible.",
    "a": ["crea", false],
    "b": ["creava", false],
    "c": ["va crear", true],
    "d": ["creant", false]
  },
  {
    "g": "El profeta ___ la veritat al poble.",
    "e": "The prophet said the truth to the people.",
    "a": ["diu", false],
    "b": ["deia", false],
    "c": ["va dir", true],
    "d": ["diguéssim", false]
  },
  {
    "g": "Els arbres ___ fulles verdes a la primavera.",
    "e": "The trees have green leaves in spring.",
    "a": ["tenen", true],
    "b": ["tenia", false],
    "c": ["tingué", false],
    "d": ["tenint", false]
  },
  {
    "g": "El riu ___ cap al mar.",
    "e": "The river flows toward the sea.",
    "a": ["flueix", true],
    "b": ["fluir", false],
    "c": ["fluirà", false],
    "d": ["fluïa", false]
  },
  {
    "g": "Al bosc, els ocells ___ de bon matí.",
    "e": "In the forest, the birds sing early in the morning.",
    "a": ["canten", true],
    "b": ["cantàvem", false],
    "c": ["cantaven", false],
    "d": ["cantaries", false]
  },
  {
    "g": "La muntanya ___ coberta de neu.",
    "e": "The mountain was covered with snow.",
    "a": ["estava", true],
    "b": ["és", false],
    "c": ["serà", false],
    "d": ["sigui", false]
  },
  {
    "g": "___ flors de molts colors al prat.",
    "e": "There are flowers of many colors in the meadow.",
    "a": ["Hi ha", true],
    "b": ["És", false],
    "c": ["Tenim", false],
    "d": ["Fa", false]
  },
  {
    "g": "El sol ___ rere els núvols.",
    "e": "The sun hides behind the clouds.",
    "a": ["s'amaga", true],
    "b": ["amagava", false],
    "c": ["amagat", false],
    "d": ["amagava't", false]
  },
  {
    "g": "Aquest ocell ___ a l’arbre més alt.",
    "e": "This bird lives in the tallest tree.",
    "a": ["viu", true],
    "b": ["vivim", false],
    "c": ["viuen", false],
    "d": ["vivies", false]
  },
  {
    "g": "Barcelona ___ moltes obres d’art famoses.",
    "e": "Barcelona has many famous works of art.",
    "a": ["té", true],
    "b": ["tenia", false],
    "c": ["tindrà", false],
    "d": ["tens", false]
  },
  {
    "g": "La ciutat ___ de gent a l'estiu.",
    "e": "The city is filled with people in the summer.",
    "a": ["s'omple", true],
    "b": ["omplia", false],
    "c": ["s'omplirà", false],
    "d": ["s'ompliarem", false]
  },
  {
    "g": "Els turistes ___ fotos davant la catedral.",
    "e": "The tourists take photos in front of the cathedral.",
    "a": ["fan", true],
    "b": ["feien", false],
    "c": ["faran", false],
    "d": ["féssim", false]
  },
  {
    "g": "___ una nova estació de metro al barri.",
    "e": "They construct a new metro station in the neighborhood.",
    "a": ["Construeixen", true],
    "b": ["Construeix", false],
    "c": ["Construïen", false],
    "d": ["Construït", false]
  },
  {
    "g": "A València, la gent ___ molt festiva.",
    "e": "In Valencia, people are very festive.",
    "a": ["és", true],
    "b": ["som", false],
    "c": ["estan", false],
    "d": ["sigui", false]
  },
  {
    "g": "L’arquitectura moderna ___ amb l'antiga al centre.",
    "e": "Modern architecture contrasts with the old in the center.",
    "a": ["contrasta", true],
    "b": ["contrastava", false],
    "c": ["contrastat", false],
    "d": ["contrastin", false]
  }
]

`);
german.sort(() => Math.random() - 0.5);
