let german = JSON.parse(`[
  {
    "g": "Ah've no seen him ___ last week.",
    "e": "I haven’t seen him since last week.",
    "a": ["since", false],
    "b": ["frae", false],
    "c": ["syne", true],
    "d": ["sith", false]
  },
  {
    "g": "She'll be comin' ower efter she's ___ her tea.",
    "e": "She’ll be coming over after she’s had her dinner.",
    "a": ["eten", false],
    "b": ["et", true],
    "c": ["ate", false],
    "d": ["eaten", false]
  },
  {
    "g": "If it ___ snaw, we'll no be gaun oot.",
    "e": "If it snows, we won’t be going out.",
    "a": ["does", false],
    "b": ["dis", false],
    "c": ["snaws", false],
    "d": ["daes", true]
  },
  {
    "g": "They wis fair ___ when they heard the news.",
    "e": "They were really shocked when they heard the news.",
    "a": ["scunnered", false],
    "b": ["glaikit", false],
    "c": ["doolie", false],
    "d": ["taen aback", true]
  },
  {
    "g": "Ah cannae dae it ___ ye help us.",
    "e": "I can’t do it unless you help me.",
    "a": ["unless", false],
    "b": ["gin", true],
    "c": ["tho", false],
    "d": ["forby", false]
  },
  {
    "g": "It wis a ___ nicht for sleep.",
    "e": "It was a good night for sleep.",
    "a": ["braw", true],
    "b": ["brae", false],
    "c": ["breich", false],
    "d": ["brunt", false]
  },
  {
    "g": "We're awa tae the ___ on Sunday.",
    "e": "We’re heading to the church on Sunday.",
    "a": ["kirk", true],
    "b": ["church", false],
    "c": ["chapel", false],
    "d": ["kirkyard", false]
  },
  {
    "g": "She gied him a ___.",
    "e": "She gave him quite a look.",
    "a": ["braw look", false],
    "b": ["good look", false],
    "c": ["gey look", true],
    "d": ["dreich look", false]
  },
  {
    "g": "The weather is pure ___ the noo.",
    "e": "The weather is really miserable right now.",
    "a": ["dreich", true],
    "b": ["braw", false],
    "c": ["gallus", false],
    "d": ["stoater", false]
  },
  {
    "g": "He wis achin wae a ___.",
    "e": "He was aching with a headache.",
    "a": ["sair heed", true],
    "b": ["wee wean", false],
    "c": ["dreid", false],
    "d": ["stour", false]
  },
  {
    "g": "They’ll no come in til the ___.",
    "e": "They won’t come in until tomorrow.",
    "a": ["morn", false],
    "b": ["morra", true],
    "c": ["mistr", false],
    "d": ["dayafter", false]
  },
  {
    "g": "Dinny ___ yersel aboot it.",
    "e": "Don’t worry yourself about it.",
    "a": ["fash", true],
    "b": ["buss", false],
    "c": ["cower", false],
    "d": ["blether", false]
  },
  {
    "g": "He's a real ___ laddie.",
    "e": "He’s a really cheeky lad.",
    "a": ["gallus", true],
    "b": ["scunnered", false],
    "c": ["snooty", false],
    "d": ["dour", false]
  },
  {
    "g": "___ a wee hand, will ye?",
    "e": "Give me a little help, will you?",
    "a": ["Gie", true],
    "b": ["Give", false],
    "c": ["Git", false],
    "d": ["Get", false]
  },
  {
    "g": "She's ___ happy tae help.",
    "e": "She’s always happy to help.",
    "a": ["aye", true],
    "b": ["day", false],
    "c": ["maybe", false],
    "d": ["gives", false]
  },
  {
    "g": "He's fair ___ in the muir.",
    "e": "He’s quite covered in mud in the moor.",
    "a": ["clarted", true],
    "b": ["clean", false],
    "c": ["clart", false],
    "d": ["clotted", false]
  },
  {
    "g": "Yer ___ is gettin annuyin.",
    "e": "Your crying is getting annoying.",
    "a": ["skirlin", true],
    "b": ["snorin", false],
    "c": ["grinnin", false],
    "d": ["bullin", false]
  },
  {
    "g": "They ___ the answer richt away.",
    "e": "They knew the answer right away.",
    "a": ["kent", true],
    "b": ["knew", false],
    "c": ["ken", false],
    "d": ["known", false]
  },
  {
    "g": "Ah ___ gang if there's nae traffic.",
    "e": "I might go if there’s no traffic.",
    "a": ["micht", true],
    "b": ["might", false],
    "c": ["macet", false],
    "d": ["michtty", false]
  },
  {
    "g": "It's a ___ day tae be oot.",
    "e": "It’s a great day to be outside.",
    "a": ["grand", true],
    "b": ["braw", false],
    "c": ["dreich", false],
    "d": ["flashy", false]
  },
  {
    "g": "The ___ are aff tae school.",
    "e": "The children are off to school.",
    "a": ["weans", true],
    "b": ["kids", false],
    "c": ["bairns", false],
    "d": ["bairn", false]
  },
  {
    "g": "I'm pure ___ the day.",
    "e": "I’m very pale today.",
    "a": ["peely-wally", true],
    "b": ["adent", false],
    "c": ["fain", false],
    "d": ["gawfy", false]
  },
  {
    "g": "She ___ tae the kirk on Sunday.",
    "e": "She went to the church on Sunday.",
    "a": ["gaed", true],
    "b": ["gangs", false],
    "c": ["gane", false],
    "d": ["gang", false]
  },
  {
    "g": "A ___ ma breeks in the weshin machine.",
    "e": "I put my trousers in the washing machine.",
    "a": ["pit", true],
    "b": ["puts", false],
    "c": ["pittin", false],
    "d": ["pitten", false]
  },
  {
    "g": "Whit ___ ye dae yestreen?",
    "e": "What did you do last night?",
    "a": ["did", true],
    "b": ["does", false],
    "c": ["daes", false],
    "d": ["dune", false]
  },
  {
    "g": "We ___ the hale day at the gairden.",
    "e": "We spent the whole day in the garden.",
    "a": ["spent", true],
    "b": ["spended", false],
    "c": ["speant", false],
    "d": ["speantit", false]
  },
  {
    "g": "The bairn ___ greetin for his maw.",
    "e": "The child is crying for his mother.",
    "a": ["is", true],
    "b": ["was", false],
    "c": ["will be", false],
    "d": ["greeted", false]
  },
  {
    "g": "Ah ___ the door afore ye cam in.",
    "e": "I closed the door before you came in.",
    "a": ["shut", true],
    "b": ["closes", false],
    "c": ["shettit", false],
    "d": ["close", false]
  },
  {
    "g": "They ___ a muckle big dug last year.",
    "e": "They got a very big dog last year.",
    "a": ["got", true],
    "b": ["get", false],
    "c": ["gat", false],
    "d": ["gote", false]
  },
  {
    "g": "He ___ tae ken the truth.",
    "e": "He wants to know the truth.",
    "a": ["wants", true],
    "b": ["wantit", false],
    "c": ["wantin", false],
    "d": ["wantes", false]
  },
  {
    "g": "The wind ___ blawin aw nicht.",
    "e": "The wind was blowing all night.",
    "a": ["wis", true],
    "b": ["is", false],
    "c": ["be", false],
    "d": ["will be", false]
  },
  {
    "g": "Dinna ___ oot in the cauld wi nae jaiket!",
    "e": "Don't go out in the cold without a jacket!",
    "a": ["gang", true],
    "b": ["go", false],
    "c": ["gae", false],
    "d": ["went", false]
  },
  {
    "g": "She ___ her keys doon the drain.",
    "e": "She dropped her keys down the drain.",
    "a": ["droppit", true],
    "b": ["droops", false],
    "c": ["drappit", false],
    "d": ["drop", false]
  },
  {
    "g": "Ah ___ ma tea afore the telly.",
    "e": "I ate my dinner in front of the TV.",
    "a": ["ate", true],
    "b": ["et", false],
    "c": ["eatin", false],
    "d": ["ates", false]
  },
  {
    "g": "Ye shuidnae ___ sae late.",
    "e": "You shouldn’t stay up so late.",
    "a": ["bide up", true],
    "b": ["staun", false],
    "c": ["gang", false],
    "d": ["stayit", false]
  },
  {
    "g": "They ___ the wean tae the schuil.",
    "e": "They took the child to school.",
    "a": ["taen", true],
    "b": ["tak", false],
    "c": ["taks", false],
    "d": ["takken", false]
  },
  {
    "g": "The laddie ___ a guid fecht yestreen.",
    "e": "The boy had a good fight last night.",
    "a": ["had", true],
    "b": ["haes", false],
    "c": ["haft", false],
    "d": ["haed", false]
  },
  {
    "g": "Whaur ___ ye gaun wi aw thon baps?",
    "e": "Where are you going with all those bread rolls?",
    "a": ["are", true],
    "b": ["is", false],
    "c": ["whaur", false],
    "d": ["gaed", false]
  },
  {
    "g": "Ma grannie ___ aye mak a braw stew.",
    "e": "My granny always used to make a nice stew.",
    "a": ["wad", true],
    "b": ["will", false],
    "c": ["wud", false],
    "d": ["wull", false]
  },
  {
    "g": "The dugs ___ barkin aw nicht lang.",
    "e": "The dogs were barking all night long.",
    "a": ["wis", true],
    "b": ["is", false],
    "c": ["barkit", false],
    "d": ["will be", false]
  },
  {
    "g": "Ah’ve ___ thon film afore.",
    "e": "I’ve seen that film before.",
    "a": ["seen", true],
    "b": ["saw", false],
    "c": ["see", false],
    "d": ["sichtit", false]
  },
  {
    "g": "Dinna ___ ower the burn wi yer slippers!",
    "e": "Don’t walk across the stream with your slippers!",
    "a": ["skelp", true],
    "b": ["run", false],
    "c": ["gang", false],
    "d": ["traipse", false]
  }
]`);
german.sort(() => Math.random() - 0.5);

