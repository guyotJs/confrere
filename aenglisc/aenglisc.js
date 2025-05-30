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
    "g": "Ic ___ þē lufode.",
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
    "g": "Þū ___ mid mē gān.",
    "e": "You will go with me.",
    "a": ["gæst", true],
    "b": ["gēongest", false],
    "c": ["gān", false],
    "d": ["ēode", false]
  },
  {
    "g": "Hīe ___ þone wulf ofslogon.",
    "e": "They killed the wolf.",
    "a": ["hæfdon", false],
    "b": ["slogon", false],
    "c": ["ofslogon", true],
    "d": ["slōgan", false]
  },
  {
    "g": "Hwæt ___ þū secge?",
    "e": "What are you saying?",
    "a": ["segst", true],
    "b": ["secge", false],
    "c": ["sǣde", false],
    "d": ["secgan", false]
  },
  {
    "g": "Ic ___ beforan þē standan.",
    "e": "I stand before you.",
    "a": ["mæg", false],
    "b": ["eom", true],
    "c": ["wæs", false],
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
    "g": "Wē ___ Godes lof singan.",
    "e": "We sing God's praise.",
    "a": ["singað", true],
    "b": ["sang", false],
    "c": ["singe", false],
    "d": ["sungen", false]
  }
]
`);
german.sort(() => Math.random() - 0.5);
