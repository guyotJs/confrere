let german = JSON.parse(`
[
  {
    "g": "Sē cyning ___ on þǣm healle.",
    "e": "The king sat in the hall.",
    "a": ["sæt", true],
    "b": ["sitteð", false],
    "c": ["set", false],
    "d": ["sittende", false]
  },
  {
    "g": "Ic ___ þē.",
    "e": "I loved you.",
    "a": ["lufode", true],
    "b": ["lufa", false],
    "c": ["lufian", false],
    "d": ["lufað", false]
  },
  {
    "g": "Hē ___ swīþe hwæt.",
    "e": "He was very brave.",
    "a": ["wæs", true],
    "b": ["is", false],
    "c": ["beoð", false],
    "d": ["wæron", false]
  },
  {
    "g": "Þū scealt mid mē ___.",
    "e": "You will go with me.",
    "a": ["gǣst", false],
    "b": ["gēongest", false],
    "c": ["gān", true],
    "d": ["ēode", false]
  },
  {
    "g": "Hīe ___ þone wulf.",
    "e": "They killed the wolf.",
    "a": ["hæfdon", false],
    "b": ["slogon", false],
    "c": ["ofslogon", true],
    "d": ["slōgan", false]
  },
  {
    "g": "Hwæt ___ þū?",
    "e": "What are you saying?",
    "a": ["segst", true],
    "b": ["secge", false],
    "c": ["sǣde", false],
    "d": ["secgan", false]
  },
  {
    "g": "Ic ___ beforan þē.",
    "e": "I stand before you.",
    "a": ["mæg", false],
    "b": ["eom", false],
    "c": ["stande", true],
    "d": ["hæfde", false]
  },
  {
    "g": "Hēo ___ hwæt hē sægde.",
    "e": "She heard what he said.",
    "a": ["gehierde", true],
    "b": ["gehierð", false],
    "c": ["gehyran", false],
    "d": ["gehierdon", false]
  },
  {
    "g": "Mīn brōþor ___ on þǣre stōwe.",
    "e": "My brother lived in that place.",
    "a": ["eardode", true],
    "b": ["leofað", false],
    "c": ["eardiað", false],
    "d": ["eardian", false]
  },
  {
    "g": "Wē ___ Godes lof",
    "e": "We sing God's praise.",
    "a": ["singað", true],
    "b": ["sang", false],
    "c": ["singe", false],
    "d": ["sungen", false]
  }
]
`);
german.sort(() => Math.random() - 0.5);
