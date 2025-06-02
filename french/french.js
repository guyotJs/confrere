let con = [true,["../con/french_conditional.html","Conditional"]]
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
  }
]
`);
german.sort(() => Math.random() - 0.5);
