let con = [true,["../con/galician_present.html","Present"]];
let german = JSON.parse(`
[
  {
    "g": "Ela ___ ao supermercado onte.",
    "e": "She went to the supermarket yesterday.",
    "a": ["iría", false],
    "b": ["vai", false],
    "c": ["irá", false],
    "d": ["foi", true]
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
    "a": ["pechabas", false],
    "b": ["pechas", false],
    "c": ["pechaches", true],
    "d": ["pecharás", false]
  },
  {
    "g": "Eles ___ estudar para o exame.",
    "e": "They have to study for the exam.",
    "a": ["terán que", false],
    "b": ["tiveron que", false],
    "c": ["tiñan que", false],
    "d": ["teñen que", true]
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
    "a": ["estaba", false],
    "b": ["está", true],
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
  },
  {
    "g": "Ela sempre ___ café pola mañá.",
    "e": "She always drinks coffee in the morning.",
    "a": ["bebe", true],
    "b": ["beber", false],
    "c": ["bebeu", false],
    "d": ["bebida", false]
  },
  {
    "g": "Eles ___ ao fútbol todos os domingos.",
    "e": "They play soccer every Sunday.",
    "a": ["xogan", true],
    "b": ["xogaron", false],
    "c": ["xogar", false],
    "d": ["xogarán", false]
  },
  {
    "g": "Mañá nós ___ ao cine.",
    "e": "Tomorrow we will go to the cinema.",
    "a": ["iremos", true],
    "b": ["imos", false],
    "c": ["fomos", false],
    "d": ["ir", false]
  },
  {
    "g": "Cando era neno, el sempre ___ contos.",
    "e": "When he was a child, he always told stories.",
    "a": ["contaba", true],
    "b": ["contou", false],
    "c": ["contar", false],
    "d": ["conte", false]
  },
  {
    "g": "O gato está enriba da ___.",
    "e": "The cat is on top of the table.",
    "a": ["mesa", true],
    "b": ["cadeira", false],
    "c": ["porta", false],
    "d": ["ventá", false]
  },
  {
    "g": "Queres ___ un anaco de torta?",
    "e": "Do you want a piece of cake?",
    "a": ["comer", true],
    "b": ["comiches", false],
    "c": ["comendo", false],
    "d": ["comas", false]
  },
  {
    "g": "Non me gusta esta ___.",
    "e": "I don't like this color.",
    "a": ["cor", true],
    "b": ["luz", false],
    "c": ["forma", false],
    "d": ["palabra", false]
  },
  {
    "g": "Ela le un libro na ___.",
    "e": "She reads a book at the beach.",
    "a": ["praia", true],
    "b": ["escola", false],
    "c": ["cociña", false],
    "d": ["igrexa", false]
  },
  {
    "g": "Onde ___ os meus lentes?",
    "e": "Where are my glasses?",
    "a": ["están", true],
    "b": ["foron", false],
    "c": ["eran", false],
    "d": ["serán", false]
  },
  {
    "g": "___ chove moito en abril.",
    "e": "It rains a lot in April.",
    "a": ["Normalmente", true],
    "b": ["Nunca", false],
    "c": ["Sempre", false],
    "d": ["Ninguén", false]
  },
  {
    "g": "A tarta está no ___.",
    "e": "The cake is in the oven.",
    "a": ["forno", true],
    "b": ["frigorífico", false],
    "c": ["chan", false],
    "d": ["teito", false]
  },
  {
    "g": "Compramos dúas entradas para o ___.",
    "e": "We bought two tickets for the concert.",
    "a": ["concerto", true],
    "b": ["mercado", false],
    "c": ["teatro", false],
    "d": ["libro", false]
  },
  {
    "g": "A clase comeza ás ___.",
    "e": "The class starts at eight.",
    "a": ["oito", true],
    "b": ["sete", false],
    "c": ["dez", false],
    "d": ["nove", false]
  },
  {
    "g": "A miña nai ___ na cociña agora.",
    "e": "My mom is cooking in the kitchen now.",
    "a": ["cociña", true],
    "b": ["cociñou", false],
    "c": ["cociñar", false],
    "d": ["cociñaba", false]
  },
  {
    "g": "O profesor escribe na ___.",
    "e": "The teacher writes on the board.",
    "a": ["pizarra", true],
    "b": ["porta", false],
    "c": ["parede", false],
    "d": ["ventá", false]
  },
  {
    "g": "Podes pasarme o ___, por favor?",
    "e": "Can you pass me the salt, please?",
    "a": ["sal", true],
    "b": ["aceite", false],
    "c": ["pan", false],
    "d": ["auga", false]
  },
  {
    "g": "A miña irmá ten un ___ branco.",
    "e": "My sister has a white dog.",
    "a": ["cán", true],
    "b": ["gato", false],
    "c": ["paxaro", false],
    "d": ["rato", false]
  },
  {
    "g": "Hoxe á noite imos ver unha ___.",
    "e": "Tonight we're going to watch a movie.",
    "a": ["película", true],
    "b": ["novela", false],
    "c": ["obra", false],
    "d": ["serie", false]
  },
  {
    "g": "O luns sempre ___ cedo.",
    "e": "On Mondays I always wake up early.",
    "a": ["me esperto", true],
    "b": ["espertei", false],
    "c": ["espertar", false],
    "d": ["espertaba", false]
  },
    {
    "g": "O ceo está cheo de ___.",
    "e": "The sky is full of stars.",
    "a": ["estrelas", true],
    "b": ["nubes", false],
    "c": ["árbores", false],
    "d": ["luzes", false]
  },
  {
    "g": "A nena ___ unha canción doce.",
    "e": "The girl sings a sweet song.",
    "a": ["canta", true],
    "b": ["cantou", false],
    "c": ["cantaba", false],
    "d": ["cantar", false]
  },
  {
    "g": "Imos camiñar polo ___.",
    "e": "We are going to walk through the forest.",
    "a": ["bosque", true],
    "b": ["xardín", false],
    "c": ["campo", false],
    "d": ["río", false]
  },
  {
    "g": "Non esquezas levar o teu ___ á escola.",
    "e": "Don't forget to take your notebook to school.",
    "a": ["caderno", true],
    "b": ["teléfono", false],
    "c": ["xoguete", false],
    "d": ["sándwich", false]
  },
  {
    "g": "Este exercicio é moi ___.",
    "e": "This exercise is very difficult.",
    "a": ["difícil", true],
    "b": ["fácil", false],
    "c": ["lento", false],
    "d": ["aberto", false]
  },
  {
    "g": "Ti ___ nervioso antes do exame?",
    "e": "Were you nervous before the exam?",
    "a": ["estabas", true],
    "b": ["estás", false],
    "c": ["estásche", false],
    "d": ["estarás", false]
  },
  {
    "g": "Encántame comer ___ no almorzo.",
    "e": "I love eating fruit for breakfast.",
    "a": ["froita", true],
    "b": ["carne", false],
    "c": ["pasta", false],
    "d": ["pan", false]
  },
  {
    "g": "Eles ___ estudar hoxe pola tarde.",
    "e": "They plan to study this afternoon.",
    "a": ["van", true],
    "b": ["foron", false],
    "c": ["viñeron", false],
    "d": ["eran", false]
  },
  {
    "g": "O autobús chega ás ___.",
    "e": "The bus arrives at six.",
    "a": ["seis", true],
    "b": ["dez", false],
    "c": ["sete", false],
    "d": ["nove", false]
  },
  {
    "g": "Miña nai está na ___.",
    "e": "My mom is in the kitchen.",
    "a": ["cociña", true],
    "b": ["sala", false],
    "c": ["bañeiro", false],
    "d": ["rúa", false]
  },
  {
    "g": "Sempre me poño ___ antes dun exame.",
    "e": "I always get nervous before a test.",
    "a": ["nervioso", true],
    "b": ["alegre", false],
    "c": ["tranquilo", false],
    "d": ["valente", false]
  },
  {
    "g": "O tren ___ con retraso.",
    "e": "The train arrived late.",
    "a": ["chegou", true],
    "b": ["chega", false],
    "c": ["chegara", false],
    "d": ["chegará", false]
  },
  {
    "g": "Que ___ queres ler hoxe?",
    "e": "Which book do you want to read today?",
    "a": ["libro", true],
    "b": ["película", false],
    "c": ["revista", false],
    "d": ["exercicio", false]
  },
  {
    "g": "Os paxaros están a ___.",
    "e": "The birds are singing.",
    "a": ["cantar", false],
    "b": ["cantando", true],
    "c": ["cantan", false],
    "d": ["cantaban", false]
  },
  {
    "g": "O restaurante está pechado os ___.",
    "e": "The restaurant is closed on Mondays.",
    "a": ["luns", true],
    "b": ["xoves", false],
    "c": ["domingos", false],
    "d": ["martes", false]
  },
  {
    "g": "Hoxe é o teu ___ de aniversario!",
    "e": "Today is your birthday party!",
    "a": ["festa", true],
    "b": ["xantar", false],
    "c": ["paseo", false],
    "d": ["exame", false]
  },
  {
    "g": "Durante as vacacións fomos a unha ___.",
    "e": "During the holidays we went to a museum.",
    "a": ["museo", true],
    "b": ["praia", false],
    "c": ["loxa", false],
    "d": ["montaña", false]
  },
  {
    "g": "___ sabes como resolver isto?",
    "e": "Do you know how to solve this?",
    "a": ["Ti", true],
    "b": ["Nós", false],
    "c": ["Eles", false],
    "d": ["El", false]
  },
  {
    "g": "O neno chorou porque estaba ___.",
    "e": "The boy cried because he was sad.",
    "a": ["triste", true],
    "b": ["contento", false],
    "c": ["cheo", false],
    "d": ["esperto", false]
  },
  {
    "g": "Hoxe pola mañá ___ ovos e pan.",
    "e": "This morning I ate eggs and bread.",
    "a": ["comín", true],
    "b": ["como", false],
    "c": ["comía", false],
    "d": ["comerei", false]
  },
    {
    "g": "Onte á noite nós ___ pizza para cear.",
    "e": "Last night we ate pizza for dinner.",
    "a": ["comemos", true],
    "b": ["comiamos", false],
    "c": ["comeremos", false],
    "d": ["comemosos", false]
  },
  {
    "g": "Ela ___ moito cando era pequena.",
    "e": "She cried a lot when she was little.",
    "a": ["choraba", true],
    "b": ["chora", false],
    "c": ["chorou", false],
    "d": ["chorar", false]
  },
  {
    "g": "O profesor ___ a clase moi cedo.",
    "e": "The teacher arrived at class very early.",
    "a": ["chegou", true],
    "b": ["chega", false],
    "c": ["chegaba", false],
    "d": ["chegará", false]
  },
  {
    "g": "Nós sempre ___ xogos os sábados.",
    "e": "We always played games on Saturdays.",
    "a": ["xogabamos", true],
    "b": ["xogamos", false],
    "c": ["xogaramos", false],
    "d": ["xogaremos", false]
  },
  {
    "g": "Ti ___ unha mensaxe onte?",
    "e": "Did you send a message yesterday?",
    "a": ["enviaches", true],
    "b": ["envías", false],
    "c": ["enviarás", false],
    "d": ["enviabas", false]
  },
  {
    "g": "A película ___ dúas horas.",
    "e": "The movie lasted two hours.",
    "a": ["durou", true],
    "b": ["dura", false],
    "c": ["duraba", false],
    "d": ["durará", false]
  },
  {
    "g": "Cando vivía en Lugo, el ___ moito.",
    "e": "When he lived in Lugo, he walked a lot.",
    "a": ["camiñaba", true],
    "b": ["camiñou", false],
    "c": ["camiña", false],
    "d": ["caminará", false]
  },
  {
    "g": "Os nenos ___ na escola durante a mañá.",
    "e": "The children were in school during the morning.",
    "a": ["estiveron", true],
    "b": ["están", false],
    "c": ["estaban", false],
    "d": ["estarían", false]
  },
  {
    "g": "O ano pasado eu ___ moitos libros.",
    "e": "Last year I read many books.",
    "a": ["lin", true],
    "b": ["leo", false],
    "c": ["lía", false],
    "d": ["lería", false]
  },
  {
    "g": "Mentres ti durmías, eu ___ a cociñar.",
    "e": "While you were sleeping, I started cooking.",
    "a": ["comecei", true],
    "b": ["comezo", false],
    "c": ["comeces", false],
    "d": ["comezaba", false]
  },
  {
    "g": "O gato ___ enriba da mesa.",
    "e": "The cat is on top of the table.",
    "a": ["está", true],
    "b": ["estará", false],
    "c": ["estaba", false],
    "d": ["estivo", false]
  },
  {
    "g": "Cando eramos pequenos, sempre ___ ao fútbol.",
    "e": "When we were little, we always played soccer.",
    "a": ["xogabamos", true],
    "b": ["xogamos", false],
    "c": ["xogariamos", false],
    "d": ["xogaríamos", false]
  },
  {
    "g": "Eles ___ moito traballo mañá.",
    "e": "They will have a lot of work tomorrow.",
    "a": ["terán", true],
    "b": ["teñen", false],
    "c": ["tiñan", false],
    "d": ["tiveron", false]
  },
  {
    "g": "Eu ___ á biblioteca todos os venres.",
    "e": "I go to the library every Friday.",
    "a": ["vou", true],
    "b": ["fun", false],
    "c": ["ía", false],
    "d": ["irei", false]
  },
  {
    "g": "Ti ___ café esta mañá?",
    "e": "Did you drink coffee this morning?",
    "a": ["bebiches", true],
    "b": ["bebes", false],
    "c": ["bebías", false],
    "d": ["beberás", false]
  },
  {
    "g": "Eles ___ a viaxe en xaneiro.",
    "e": "They began the trip in January.",
    "a": ["comezaron", true],
    "b": ["comezan", false],
    "c": ["comezaban", false],
    "d": ["comezarán", false]
  },
  {
    "g": "O coche novo é moi ___.",
    "e": "The new car is very fast.",
    "a": ["rápido", true],
    "b": ["lento", false],
    "c": ["pesado", false],
    "d": ["pequeno", false]
  },
  {
    "g": "A neve ___ todo o campo.",
    "e": "The snow covered the whole field.",
    "a": ["cubriu", true],
    "b": ["cobre", false],
    "c": ["cubría", false],
    "d": ["cubrirá", false]
  },
  {
    "g": "___ a chuvia, quedamos na casa.",
    "e": "Because of the rain, we stayed home.",
    "a": ["Por", true],
    "b": ["Durante", false],
    "c": ["Con", false],
    "d": ["Mentres", false]
  },
  {
    "g": "Ela sempre se ___ cedo.",
    "e": "She always wakes up early.",
    "a": ["esperta", true],
    "b": ["desperta", false],
    "c": ["ergue", false],
    "d": ["acende", false]
  },
  {
    "g": "Ti ___ os pratos onte á noite?",
    "e": "Did you wash the dishes last night?",
    "a": ["lavaches", true],
    "b": ["lavas", false],
    "c": ["lavarás", false],
    "d": ["lavabas", false]
  },
  {
    "g": "Non hai ___ no caixón.",
    "e": "There is nothing in the drawer.",
    "a": ["nada", true],
    "b": ["todo", false],
    "c": ["alguén", false],
    "d": ["ninguén", false]
  },
  {
    "g": "O avó ___ moitas historias interesantes.",
    "e": "Grandpa tells many interesting stories.",
    "a": ["conta", true],
    "b": ["contaba", false],
    "c": ["contou", false],
    "d": ["contará", false]
  },
  {
    "g": "Eles ___ ao cine cada fin de semana.",
    "e": "They go to the movies every weekend.",
    "a": ["van", true],
    "b": ["foron", false],
    "c": ["foran", false],
    "d": ["iran", false]
  },
  {
    "g": "Eu ___ o libro antes da clase.",
    "e": "I read the book before class.",
    "a": ["lin", true],
    "b": ["leo", false],
    "c": ["lía", false],
    "d": ["lerei", false]
  },
  {
    "g": "A familia ___ á praia en agosto.",
    "e": "The family went to the beach in August.",
    "a": ["foi", true],
    "b": ["vai", false],
    "c": ["ía", false],
    "d": ["irá", false]
  },
  {
    "g": "Ti ___ moito en clase hoxe.",
    "e": "You spoke a lot in class today.",
    "a": ["falaches", true],
    "b": ["falas", false],
    "c": ["falabas", false],
    "d": ["falarás", false]
  },
  {
    "g": "Ela non ___ tempo para cociñar.",
    "e": "She didn’t have time to cook.",
    "a": ["tivo", true],
    "b": ["ten", false],
    "c": ["terá", false],
    "d": ["tiña", false]
  },
  {
    "g": "O neno ___ moito chocolate.",
    "e": "The boy ate a lot of chocolate.",
    "a": ["comeu", true],
    "b": ["come", false],
    "c": ["comía", false],
    "d": ["comerá", false]
  },
  {
    "g": "Estes zapatos son demasiado ___.",
    "e": "These shoes are too small.",
    "a": ["pequenos", true],
    "b": ["grandes", false],
    "c": ["novos", false],
    "d": ["longos", false]
  },
  {
    "g": "Nós ___ tarde porque non soou o espertador.",
    "e": "We were late because the alarm didn’t ring.",
    "a": ["chegamos", true],
    "b": ["chegamosos", false],
    "c": ["chegabamos", false],
    "d": ["chegaríamos", false]
  },
  {
    "g": "Os meus amigos ___ ao concerto con nós.",
    "e": "My friends came to the concert with us.",
    "a": ["viñeron", true],
    "b": ["veñen", false],
    "c": ["virán", false],
    "d": ["viñan", false]
  },
  {
    "g": "Quero comprar unha ___ nova.",
    "e": "I want to buy a new shirt.",
    "a": ["camisa", true],
    "b": ["mesa", false],
    "c": ["caixa", false],
    "d": ["zapato", false]
  },
  {
    "g": "O reloxo ___ ás doce.",
    "e": "The clock struck twelve.",
    "a": ["deu", true],
    "b": ["dá", false],
    "c": ["daba", false],
    "d": ["dará", false]
  },
  {
    "g": "O bebé ___ todo o día.",
    "e": "The baby slept all day.",
    "a": ["durmiu", true],
    "b": ["durme", false],
    "c": ["dormía", false],
    "d": ["dormirá", false]
  },
  {
    "g": "O mercado abre os ___.",
    "e": "The market opens on Saturdays.",
    "a": ["sábados", true],
    "b": ["luns", false],
    "c": ["mércores", false],
    "d": ["xoves", false]
  },
  {
    "g": "Non hai leite, só ___.",
    "e": "There is no milk, only water.",
    "a": ["auga", true],
    "b": ["pan", false],
    "c": ["zume", false],
    "d": ["viño", false]
  },
  {
    "g": "Eles ___ as portas con chave.",
    "e": "They locked the doors.",
    "a": ["pecharon", true],
    "b": ["pechan", false],
    "c": ["pechaban", false],
    "d": ["pecharán", false]
  },
  {
    "g": "Ela sempre ___ un abrigo en inverno.",
    "e": "She always wore a coat in winter.",
    "a": ["levaba", true],
    "b": ["leva", false],
    "c": ["levou", false],
    "d": ["levará", false]
  },
  {
    "g": "Nós ___ un coche novo o mes pasado.",
    "e": "We bought a new car last month.",
    "a": ["mercamos", true],
    "b": ["mercabamos", false],
    "c": ["mercariamos", false],
    "d": ["mercaríamos", false]
  },
  {
    "g": "Gustaríache un pouco máis de ___?",
    "e": "Would you like some more bread?",
    "a": ["pan", true],
    "b": ["leite", false],
    "c": ["auga", false],
    "d": ["viño", false]
  },
  {
    "g": "Non ___ o que me dixeches.",
    "e": "I didn’t understand what you told me.",
    "a": ["entendín", true],
    "b": ["entendo", false],
    "c": ["entendía", false],
    "d": ["entendería", false]
  },
  {
    "g": "Ti ___ este libro antes?",
    "e": "Have you read this book before?",
    "a": ["liches", true],
    "b": ["les", false],
    "c": ["lías", false],
    "d": ["lerás", false]
  },
  {
    "g": "Eles ___ ao médico pola mañá.",
    "e": "They went to the doctor in the morning.",
    "a": ["foron", true],
    "b": ["van", false],
    "c": ["iran", false],
    "d": ["ían", false]
  },
  {
    "g": "Hai moito vento, ___ a xanela.",
    "e": "It's very windy, close the window.",
    "a": ["pecha", true],
    "b": ["abre", false],
    "c": ["rompe", false],
    "d": ["deixa", false]
  },
  {
    "g": "Hoxe ___ o aniversario do meu irmán.",
    "e": "Today is my brother's birthday.",
    "a": ["é", true],
    "b": ["foi", false],
    "c": ["era", false],
    "d": ["será", false]
  },
  {
    "g": "Estabamos a mirar as ___.",
    "e": "We were looking at the stars.",
    "a": ["estrelas", true],
    "b": ["nubes", false],
    "c": ["pedras", false],
    "d": ["follas", false]
  }
]
`);
german.sort(() => Math.random() - 0.5);
