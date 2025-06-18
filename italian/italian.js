let german = JSON.parse(`
[
  {
    "g": "Il sacerdote ha detto che il battesimo sarebbe ___ domenica.",
    "e": "The priest said that the baptism would be celebrated on Sunday.",
    "a": ["celebrato", true],
    "b": ["parlato", false],
    "c": ["trovato", false],
    "d": ["pregato", false]
  },
  {
    "g": "Sebbene Maria ___ ogni domenica, quel giorno non c’era.",
    "e": "Although Maria attends every Sunday, that day she wasn’t there.",
    "a": ["preghi", true],
    "b": ["pregava", false],
    "c": ["pregato", false],
    "d": ["pregare", false]
  },
  {
    "g": "Il vescovo ci ha chiesto se ___ già la Cresima.",
    "e": "The bishop asked us if we had already received Confirmation.",
    "a": ["avessimo", true],
    "b": ["abbiamo", false],
    "c": ["avremo", false],
    "d": ["avete", false]
  },
  {
    "g": "I fedeli si riuniscono per ___ insieme.",
    "e": "The faithful gather to pray together.",
    "a": ["pregare", true],
    "b": ["parlare", false],
    "c": ["entrare", false],
    "d": ["giocare", false]
  },
  {
    "g": "Dopo che il coro ___, tutti uscirono in silenzio.",
    "e": "After the choir finished, everyone left in silence.",
    "a": ["terminò", true],
    "b": ["iniziò", false],
    "c": ["cantava", false],
    "d": ["alzò", false]
  },
  {
    "g": "Era importante che il parroco ___ la verità.",
    "e": "It was important that the priest speak the truth.",
    "a": ["dicesse", true],
    "b": ["dice", false],
    "c": ["dirà", false],
    "d": ["detto", false]
  },
  {
    "g": "Nonostante ___ tardi, siamo arrivati in tempo.",
    "e": "Although we left late, we arrived on time.",
    "a": ["partissimo", true],
    "b": ["partiamo", false],
    "c": ["partite", false],
    "d": ["partito", false]
  },
  {
    "g": "Il catechista sperava che i bambini ___ bene.",
    "e": "The catechist hoped that the children understood well.",
    "a": ["capissero", true],
    "b": ["capiscono", false],
    "c": ["capito", false],
    "d": ["capire", false]
  },
  {
    "g": "Molti fedeli ___ il rosario ogni sera.",
    "e": "Many faithful pray the rosary every evening.",
    "a": ["recitano", true],
    "b": ["dormono", false],
    "c": ["ascoltano", false],
    "d": ["mangiano", false]
  },
  {
    "g": "L’acqua del battesimo viene ___ dal parroco.",
    "e": "The baptismal water is blessed by the priest.",
    "a": ["benedetta", true],
    "b": ["bevuta", false],
    "c": ["lavata", false],
    "d": ["gettata", false]
  },
  {
    "g": "Credo che Gesù sia il ___ di Dio.",
    "e": "I believe that Jesus is the Son of God.",
    "a": ["Figlio", true],
    "b": ["Servo", false],
    "c": ["Profeta", false],
    "d": ["Re", false]
  },
  {
    "g": "Durante il battesimo, il padre ha dato la sua ___.",
    "e": "During the baptism, the father gave his testimony.",
    "a": ["testimonianza", true],
    "b": ["promessa", false],
    "c": ["domanda", false],
    "d": ["spiegazione", false]
  },
  {
    "g": "I discepoli hanno ___ che Gesù era risorto.",
    "e": "The disciples testified that Jesus had risen.",
    "a": ["testimoniato", true],
    "b": ["creduto", false],
    "c": ["sperato", false],
    "d": ["chiamato", false]
  },
  {
    "g": "Se tu ___ con il cuore, sarai salvato.",
    "e": "If you believe with your heart, you will be saved.",
    "a": ["credi", true],
    "b": ["pensi", false],
    "c": ["senti", false],
    "d": ["dici", false]
  },
  {
    "g": "Il giovane ha detto che voleva ___ la sua vita a Cristo.",
    "e": "The young man said he wanted to dedicate his life to Christ.",
    "a": ["dedicare", true],
    "b": ["donare", false],
    "c": ["salvare", false],
    "d": ["scrivere", false]
  },
  {
    "g": "Dopo la predica, molti hanno deciso di essere ___.",
    "e": "After the sermon, many decided to be baptized.",
    "a": ["battezzati", true],
    "b": ["pregati", false],
    "c": ["chiamati", false],
    "d": ["portati", false]
  },
  {
    "g": "Paolo ha scritto molte lettere per ___ la fede.",
    "e": "Paul wrote many letters to spread the faith.",
    "a": ["diffondere", true],
    "b": ["vendere", false],
    "c": ["inviare", false],
    "d": ["scrivere", false]
  },
  {
    "g": "Chiunque ___ in lui avrà la vita eterna.",
    "e": "Whoever believes in him will have eternal life.",
    "a": ["crede", true],
    "b": ["vive", false],
    "c": ["ama", false],
    "d": ["prega", false]
  },
  {
    "g": "La fede viene dall’___ della Parola di Dio.",
    "e": "Faith comes from hearing the Word of God.",
    "a": ["ascolto", true],
    "b": ["uso", false],
    "c": ["eco", false],
    "d": ["inizio", false]
  },
  {
    "g": "Lei ha ___ davanti alla chiesa che Gesù l’ha cambiata.",
    "e": "She testified before the church that Jesus had changed her.",
    "a": ["dichiarato", true],
    "b": ["gridato", false],
    "c": ["accusato", false],
    "d": ["aspettato", false]
  }
]
`);
german.sort(() => Math.random() - 0.5);
