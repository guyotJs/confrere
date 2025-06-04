let con = [false];
let german = JSON.parse(`
[
  {
    "g": "La porta és ___.",
    "e": "The door is open.",
    "a": ["oberta", true],
    "b": ["tancada", false],
    "c": ["llarga", false],
    "d": ["calenta", false]
  },
  {
    "g": "Veig una flor ___.",
    "e": "I see a red flower.",
    "a": ["vermella", true],
    "b": ["verda", false],
    "c": ["blava", false],
    "d": ["petita", false]
  },
  {
    "g": "L'aigua és ___.",
    "e": "The water is cold.",
    "a": ["freda", true],
    "b": ["calenta", false],
    "c": ["seca", false],
    "d": ["fosca", false]
  },
  {
    "g": "El gat està ___ la taula.",
    "e": "The cat is under the table.",
    "a": ["sota", true],
    "b": ["sobre", false],
    "c": ["amb", false],
    "d": ["a", false]
  },
  {
    "g": "El nen té un gos ___.",
    "e": "The boy has a small dog.",
    "a": ["petit", true],
    "b": ["vermell", false],
    "c": ["clar", false],
    "d": ["fred", false]
  },
  {
    "g": "El cotxe és ___.",
    "e": "The car is fast.",
    "a": ["ràpid", true],
    "b": ["lent", false],
    "c": ["pesat", false],
    "d": ["cansat", false]
  },
  {
    "g": "La cadira és ___.",
    "e": "The chair is brown.",
    "a": ["marro", true],
    "b": ["gris", false],
    "c": ["vermell", false],
    "d": ["negre", false]
  },
  {
    "g": "Ell camina ___ el parc.",
    "e": "He walks through the park.",
    "a": ["pel", true],
    "b": ["a", false],
    "c": ["cap", false],
    "d": ["amb", false]
  },
  {
    "g": "Ara és ___.",
    "e": "Now is night.",
    "a": ["nit", true],
    "b": ["matí", false],
    "c": ["temps", false],
    "d": ["sol", false]
  },
  {
    "g": "Aquest llibre és molt ___.",
    "e": "This book is very good.",
    "a": ["bo", true],
    "b": ["gran", false],
    "c": ["ràpid", false],
    "d": ["ple", false]
  },
  {
    "g": "Jo ___ una casa gran.",
    "e": "I have a big house.",
    "a": ["tinc", true],
    "b": ["té", false],
    "c": ["tenim", false],
    "d": ["tenen", false]
  },
  {
    "g": "Ella ___ amb la seva mare.",
    "e": "She talks with her mother.",
    "a": ["parla", true],
    "b": ["parlem", false],
    "c": ["parles", false],
    "d": ["parlar", false]
  },
  {
    "g": "Nosaltres ___ cada matí.",
    "e": "We walk every morning.",
    "a": ["caminen", false],
    "b": ["camina", false],
    "c": ["caminen", false],
    "d": ["caminen", false]
  },
  {
    "g": "Tu ___ molt a l'escola.",
    "e": "You learn a lot at school.",
    "a": ["aprens", true],
    "b": ["apren", false],
    "c": ["aprenem", false],
    "d": ["aprendre", false]
  },
  {
    "g": "Ell ___ feliç avui.",
    "e": "He is happy today.",
    "a": ["està", true],
    "b": ["és", false],
    "c": ["sóc", false],
    "d": ["estan", false]
  },
  {
    "g": "La taula és ___.",
    "e": "The table is round.",
    "a": ["rodona", true],
    "b": ["freda", false],
    "c": ["blava", false],
    "d": ["cansada", false]
  },
  {
    "g": "El llibre és a ___ la cadira.",
    "e": "The book is on the chair.",
    "a": ["sobre", true],
    "b": ["sota", false],
    "c": ["dins", false],
    "d": ["cap", false]
  },
  {
    "g": "Aquest peix és ___.",
    "e": "This fish is long.",
    "a": ["llarg", true],
    "b": ["alt", false],
    "c": ["clar", false],
    "d": ["lent", false]
  },
  {
    "g": "___ és el teu llapis?",
    "e": "Where is your pencil?",
    "a": ["On", true],
    "b": ["Quan", false],
    "c": ["Com", false],
    "d": ["Per què", false]
  },
  {
    "g": "Aquest menjar és molt ___.",
    "e": "This food is very good.",
    "a": ["bo", true],
    "b": ["dolç", false],
    "c": ["vell", false],
    "d": ["clar", false]
  }
]    
`);
german.sort(() => Math.random() - 0.5);
