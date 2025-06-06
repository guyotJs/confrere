let con = [true,["../con/french_conditional.html","Conditional"],["../con/french_passe_simple.html","Passé Simple"],["../con/french_subjonctif.html","Subjonctif"],["../con/french_future_simple.html","Future Simple"],["../con/french_imparfait.html","Imparfait"]]
let german = JSON.parse(`
[
  {
    "g": "Je n’aurais jamais pensé que ce projet ___ si difficile.",
    "e": "I would never have thought that this project would be so difficult.",
    "a": ["serait", true],
    "b": ["soit", false],
    "c": ["est", false],
    "d": ["sera", false]
  },
  {
    "g": "Je saurais si ___ à l'école.",
    "e": "I would know if I went to school.",
    "a": ["j'allais", true],
    "b": ["j'aurais", false],
    "c": ["il faut", false],
    "d": ["je vais", false]
  },
  {
    "g": "Si j’avais plus de temps, je ___ des cours de peinture.",
    "e": "If I had more time, I would take painting classes.",
    "a": ["prendrais", true],
    "b": ["prends", false],
    "c": ["pendant", false],
    "d": ["prenne", false]
  },
  {
    "g": "Il faut que tu ___ attention à ce que tu dis.",
    "e": "You need to be careful with what you say.",
    "a": ["fasses", true],
    "b": ["fais", false],
    "c": ["fera", false],
    "d": ["fait", false]
  },
  {
    "g": "Bien qu’il ___, ils continuent à jouer dehors.",
    "e": "Although it’s raining, they keep playing outside.",
    "a": ["pleuve", true],
    "b": ["pleut", false],
    "c": ["pleuvait", false],
    "d": ["pleuvra", false]
  },
  {
    "g": "Elle a été embauchée après ___ son stage.",
    "e": "She was hired after completing her internship.",
    "a": ["avoir terminé", true],
    "b": ["finir", false],
    "c": ["terminé", false],
    "d": ["ayant terminé", false]
  },
  {
    "g": "Ils sont en train de ___ leur maison.",
    "e": "They are currently renovating their house.",
    "a": ["rénover", true],
    "b": ["rénovaient", false],
    "c": ["rénoveront", false],
    "d": ["rénoveraient", false]
  },
  {
    "g": "Je me demande pourquoi il ne m’___ pas encore répondu.",
    "e": "I wonder why he hasn’t responded to me yet.",
    "a": ["a", true],
    "b": ["avait", false],
    "c": ["est", false],
    "d": ["avait eu", false]
  },
  {
    "g": "Tu devrais ___ ce plat, c’est une spécialité.",
    "e": "You should try this dish, it’s a specialty.",
    "a": ["essayer", true],
    "b": ["essaie", false],
    "c": ["essayé", false],
    "d": ["essayas", false]
  },
  {
    "g": "Nous nous étions déjà ___ lors de la conférence.",
    "e": "We had already met at the conference.",
    "a": ["rencontrés", true],
    "b": ["rencontrer", false],
    "c": ["rencontre", false],
    "d": ["rencontrant", false]
  },
  {
    "g": "Il est important de ___ gérer son temps.",
    "e": "It’s important to know how to manage your time.",
    "a": ["savoir", true],
    "b": ["connaître", false],
    "c": ["sachant", false],
    "d": ["apprendre", false]
  },
   {
    "g": "Quand il _____ revenu, tout avait changé.",
    "e": "When he came back, everything had changed.",
    "a": ["est", true],
    "b": ["avait", false],
    "c": ["était", false],
    "d": ["sera", false]
  },
  {
    "g": "Nous _____ allés au musée d'art moderne samedi dernier.",
    "e": "We went to the modern art museum last Saturday.",
    "a": ["sommes", true],
    "b": ["avons", false],
    "c": ["allons", false],
    "d": ["serons", false]
  },
  {
    "g": "Si j'avais su, je ne _____ rien dit.",
    "e": "If I had known, I wouldn’t have said anything.",
    "a": ["aurais", true],
    "b": ["avais", false],
    "c": ["serais", false],
    "d": ["étais", false]
  },
  {
    "g": "Elle ne veut pas que tu _____ si tard.",
    "e": "She doesn't want you to come back so late.",
    "a": ["rentries", false],
    "b": ["rentres", true],
    "c": ["rentreras", false],
    "d": ["rentrer", false]
  },
  {
    "g": "Il faut que nous _____ cette décision rapidement.",
    "e": "We must make this decision quickly.",
    "a": ["prenions", true],
    "b": ["prenons", false],
    "c": ["prendrons", false],
    "d": ["prendre", false]
  },
  {
    "g": "Chaque fois qu’il pleut, elle _____ de rester chez elle.",
    "e": "Every time it rains, she prefers to stay home.",
    "a": ["préfère", true],
    "b": ["préféré", false],
    "c": ["préférera", false],
    "d": ["préférérait", false]
  },
  {
    "g": "Il est essentiel que vous _____ bien informés.",
    "e": "It is essential that you be well informed.",
    "a": ["soyez", true],
    "b": ["êtes", false],
    "c": ["serez", false],
    "d": ["étiez", false]
  },
  {
    "g": "Ils _____ probablement partis avant l’aube.",
    "e": "They probably left before dawn.",
    "a": ["sont", false],
    "b": ["étaient", false],
    "c": ["sont", false],
    "d": ["sont", true]
  },
  {
    "g": "Elle aurait réussi si elle _____ plus d'efforts.",
    "e": "She would have succeeded if she had made more effort.",
    "a": ["avait fait", true],
    "b": ["faisait", false],
    "c": ["fasse", false],
    "d": ["ferait", false]
  },
  {
    "g": "Tu _____ me téléphoner avant de venir.",
    "e": "You should have called me before coming.",
    "a": ["aurais dû", true],
    "b": ["devrais", false],
    "c": ["avais dû", false],
    "d": ["as dû", false]
  },
  {
    "g": "Il prétend ne jamais _____ cette femme.",
    "e": "He claims to have never seen that woman.",
    "a": ["avoir vu", true],
    "b": ["voir", false],
    "c": ["vu", false],
    "d": ["avoir voir", false]
  },
  {
    "g": "Avant que tu _____, on devrait discuter.",
    "e": "Before you leave, we should talk.",
    "a": ["partes", true],
    "b": ["pars", false],
    "c": ["partiras", false],
    "d": ["partais", false]
  },
  {
    "g": "Il a dit qu’il _____ dès qu’il aurait fini.",
    "e": "He said he would come as soon as he had finished.",
    "a": ["viendrait", true],
    "b": ["vient", false],
    "c": ["venait", false],
    "d": ["vienne", false]
  },
  {
    "g": "Ils parlent comme s’ils _____ tout compris.",
    "e": "They talk as if they had understood everything.",
    "a": ["avaient", true],
    "b": ["ont", false],
    "c": ["auront", false],
    "d": ["aient", false]
  },
  {
    "g": "Je doute qu’il _____ capable de finir à temps.",
    "e": "I doubt he’s able to finish on time.",
    "a": ["soit", true],
    "b": ["est", false],
    "c": ["sera", false],
    "d": ["serait", false]
  },
  {
    "g": "Tu penses qu’ils _____ nous aider ce week-end ?",
    "e": "Do you think they’ll help us this weekend?",
    "a": ["vont", true],
    "b": ["aient", false],
    "c": ["étaient", false],
    "d": ["seraient", false]
  },
  {
    "g": "Je me demande pourquoi il ne _____ pas encore arrivé.",
    "e": "I wonder why he hasn’t arrived yet.",
    "a": ["est", true],
    "b": ["soit", false],
    "c": ["sera", false],
    "d": ["ait", false]
  },
  {
    "g": "Même si tu _____, je ne te croirais pas.",
    "e": "Even if you explained, I wouldn't believe you.",
    "a": ["expliquais", true],
    "b": ["expliques", false],
    "c": ["explique", false],
    "d": ["as expliqué", false]
  },
  {
    "g": "Il aurait fallu que nous _____ plus tôt.",
    "e": "We should have left earlier.",
    "a": ["partions", true],
    "b": ["partons", false],
    "c": ["partirons", false],
    "d": ["partir", false]
  },
  {
    "g": "Ce serait mieux si vous _____ le rapport avant demain.",
    "e": "It would be better if you submitted the report before tomorrow.",
    "a": ["rendiez", true],
    "b": ["rendez", false],
    "c": ["rendrez", false],
    "d": ["rendriez", false]
  },
    {
    "g": "Le volcan a émis une énorme _____ de fumée noire.",
    "e": "The volcano released a huge cloud of black smoke.",
    "a": ["nuée", true],
    "b": ["ombre", false],
    "c": ["brume", false],
    "d": ["toile", false]
  },
  {
    "g": "Elle a ressenti une grande _____ après l'entretien.",
    "e": "She felt great anguish after the interview.",
    "a": ["angoisse", true],
    "b": ["colère", false],
    "c": ["joie", false],
    "d": ["peur", false]
  },
  {
    "g": "L'entreprise cherche à améliorer sa _____ environnementale.",
    "e": "The company is seeking to improve its environmental imprint.",
    "a": ["empreinte", true],
    "b": ["trace", false],
    "c": ["marque", false],
    "d": ["image", false]
  },
  {
    "g": "Pendant la réunion, il a proposé une _____ intéressante.",
    "e": "During the meeting, he made an interesting suggestion.",
    "a": ["suggestion", true],
    "b": ["invitation", false],
    "c": ["question", false],
    "d": ["condition", false]
  },
  {
    "g": "Nous avons loué une petite _____ près de la plage.",
    "e": "We rented a small house near the beach.",
    "a": ["maison", true],
    "b": ["route", false],
    "c": ["fenêtre", false],
    "d": ["chaise", false]
  },
  {
    "g": "La conférence portait sur les _____ climatiques.",
    "e": "The conference was about climate challenges.",
    "a": ["enjeux", true],
    "b": ["moyens", false],
    "c": ["travaux", false],
    "d": ["progrès", false]
  },
  {
    "g": "Le goût de ce fromage est très _____.",
    "e": "The taste of this cheese is very strong.",
    "a": ["fort", true],
    "b": ["dur", false],
    "c": ["sombre", false],
    "d": ["clair", false]
  },
  {
    "g": "Il a une _____ exceptionnelle pour les langues.",
    "e": "He has an exceptional ability for languages.",
    "a": ["faculté", true],
    "b": ["chance", false],
    "c": ["figure", false],
    "d": ["part", false]
  },
  {
    "g": "Elle a reçu une _____ pour ses recherches en biologie.",
    "e": "She received a scholarship for her research in biology.",
    "a": ["bourse", true],
    "b": ["valise", false],
    "c": ["lettre", false],
    "d": ["place", false]
  },
  {
    "g": "Ce quartier est connu pour son _____ artistique.",
    "e": "This neighborhood is known for its artistic atmosphere.",
    "a": ["ambiance", true],
    "b": ["histoire", false],
    "c": ["objet", false],
    "d": ["bâtiment", false]
  }
]
`);
german.sort(() => Math.random() - 0.5);
