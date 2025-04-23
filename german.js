let german = JSON.parse(`
[
    {
        "g":"Du bist immer noch -- mensch!",
        "e":"You are still the same person!",
        "a":["sammeln",false],
        "b":["der",false],
        "c":["derselbe",true],
        "d":["macht",false]
    },
    {
        "g":"Ich gehe nicht raus -- es regnet!",
        "e":"I'm not going out because it's raining!",
        "a":["ob",false],
        "b":["weil",true],
        "c":["wann",false],
        "d":["wohin",false]
    },
    {
        "g":"Was gibt es -- noch zu sagen?",
        "e":"What else is there to say?",
        "a":["flut",false],
        "b":["kartoffeln",false],
        "c":["ahnung",false],
        "d":["sonst",true]
    },
    {
        "g":"Könntest du mir bitte -- helfen?",
        "e":"Could you please help me?",
        "a":["mit",true],
        "b":["nach",false],
        "c":["aus",false],
        "d":["zu",false]
    },
    {
        "g":"Er ist zu spät gekommen, -- der Bus hatte Verspätung.",
        "e":"He arrived late because the bus was delayed.",
        "a":["obwohl",false],
        "b":["aber",false],
        "c":["denn",true],
        "d":["trotzdem",false]
    },
    {
        "g":"-- du heute Abend Zeit?",
        "e":"Do you have time this evening?",
        "a":["Brauchst",false],
        "b":["Willst",false],
        "c":["Hast",true],
        "d":["Kannst",false]
    },
    {
        "g":"Ich freue mich -- das Wochenende.",
        "e":"I'm looking forward to the weekend.",
        "a":["auf",true],
        "b":["über",false],
        "c":["mit",false],
        "d":["durch",false]
    },
    {
        "g":"Sie wohnt -- ihrer Tante.",
        "e":"She lives with her aunt.",
        "a":["auf",false],
        "b":["neben",false],
        "c":["bei",true],
        "d":["von",false]
    },
    {
        "g":"Wir treffen uns -- dem Kino.",
        "e":"We’re meeting in front of the cinema.",
        "a":["unter",false],
        "b":["hinter",false],
        "c":["vor",true],
        "d":["an",false]
    },
    {
        "g":"Er hat das ganz alleine --.",
        "e":"He did it all by himself.",
        "a":["machen",false],
        "b":["gemacht",true],
        "c":["macht",false],
        "d":["gemachen",false]
    },
    {
        "g":"-- du mir bitte das Salz geben?",
        "e":"Could you please pass me the salt?",
        "a":["Willst",false],
        "b":["Kannst",true],
        "c":["Gehst",false],
        "d":["Machst",false]
    },
    {
        "g":"Ich habe keine --, was das bedeutet.",
        "e":"I have no idea what that means.",
        "a":["Lust",false],
        "b":["Ahnung",true],
        "c":["Sache",false],
        "d":["Antwort",false]
    },
    {
        "g":"Er wartet -- dem Bus.",
        "e":"He is waiting for the bus.",
        "a":["an",false],
        "b":["mit",false],
        "c":["auf",true],
        "d":["um",false]
    },
    {
        "g":"Wir fahren morgen -- Berlin.",
        "e":"We’re going to Berlin tomorrow.",
        "a":["in",false],
        "b":["zu",false],
        "c":["nach",true],
        "d":["auf",false]
    },
    {
        "g":"-- ist dein Lieblingsessen?",
        "e":"What is your favorite food?",
        "a":["Wie",false],
        "b":["Wo",false],
        "c":["Was",true],
        "d":["Wann",false]
    },
    {
        "g":"Das ist die Frau, -- ich gestern getroffen habe.",
        "e":"That’s the woman I met yesterday.",
        "a":["wann",false],
        "b":["die",true],
        "c":["wer",false],
        "d":["wie",false]
    },
    {
        "g":"Ich gehe ins Bett, -- ich müde bin.",
        "e":"I’m going to bed because I’m tired.",
        "a":["obwohl",false],
        "b":["damit",false],
        "c":["weil",true],
        "d":["wenn",false]
    },
    {
        "g":"Meine Eltern kommen -- Besuch.",
        "e":"My parents are coming for a visit.",
        "a":["zum",false],
        "b":["im",false],
        "c":["zu",true],
        "d":["an",false]
    },
    {
        "g":"Wir haben uns gestern im Park --.",
        "e":"We met in the park yesterday.",
        "a":["getroffen",true],
        "b":["treffen",false],
        "c":["traf",false],
        "d":["trefften",false]
    },
    {
        "g":"Er spricht gut Deutsch, aber mit -- Akzent.",
        "e":"He speaks German well but with an accent.",
        "a":["einem",true],
        "b":["eine",false],
        "c":["einer",false],
        "d":["eines",false]
    },
    {
        "g": "Ich muss jetzt gehen, -- es ist schon spät.",
        "e": "I have to go now because it's already late.",
        "a": ["aber", false],
        "b": ["denn", true],
        "c": ["oder", false],
        "d": ["doch", false]
    },
    {
        "g": "Sie hat Angst -- Spinnen.",
        "e": "She is afraid of spiders.",
        "a": ["für", false],
        "b": ["an", false],
        "c": ["vor", true],
        "d": ["mit", false]
    },
    {
        "g": "Wir fahren -- dem Auto.",
        "e": "We are going by car.",
        "a": ["mit", true],
        "b": ["zu", false],
        "c": ["an", false],
        "d": ["in", false]
    },
    {
        "g": "Ich interessiere mich -- Musik.",
        "e": "I'm interested in music.",
        "a": ["über", false],
        "b": ["für", true],
        "c": ["mit", false],
        "d": ["zu", false]
    },
    {
        "g": "Der Supermarkt ist -- dem Kino.",
        "e": "The supermarket is next to the cinema.",
        "a": ["unter", false],
        "b": ["neben", true],
        "c": ["hinter", false],
        "d": ["über", false]
    },
    {
        "g": "Ich habe keine Zeit, -- ich muss lernen.",
        "e": "I don't have time because I have to study.",
        "a": ["wenn", false],
        "b": ["da", true],
        "c": ["ob", false],
        "d": ["trotzdem", false]
    },
    {
        "g": "Er ist größer -- ich.",
        "e": "He is taller than me.",
        "a": ["wann", false],
        "b": ["wie", false],
        "c": ["als", true],
        "d": ["ob", false]
    },
    {
        "g": "Ich warte -- dich seit einer Stunde!",
        "e": "I've been waiting for you for an hour!",
        "a": ["über", false],
        "b": ["auf", true],
        "c": ["in", false],
        "d": ["von", false]
    },
    {
        "g": "Sie geht jeden Tag -- der Schule.",
        "e": "She walks to school every day.",
        "a": ["an", false],
        "b": ["in", false],
        "c": ["zu", true],
        "d": ["mit", false]
    },
    {
        "g": "Wir essen oft Pizza, -- sie schmeckt gut.",
        "e": "We often eat pizza because it tastes good.",
        "a": ["damit", false],
        "b": ["weil", true],
        "c": ["ob", false],
        "d": ["trotzdem", false]
    },
    {
        "g": "Er hat das -- gesagt.",
        "e": "He said that clearly.",
        "a": ["klar", true],
        "b": ["hoch", false],
        "c": ["neu", false],
        "d": ["schnell", false]
    },
    {
        "g": "Ich bin müde, -- ich spät ins Bett gegangen bin.",
        "e": "I'm tired because I went to bed late.",
        "a": ["aber", false],
        "b": ["denn", false],
        "c": ["weil", true],
        "d": ["doch", false]
    },
    {
        "g": "Wir lernen Deutsch, -- wir in Deutschland leben.",
        "e": "We're learning German because we live in Germany.",
        "a": ["obwohl", false],
        "b": ["damit", false],
        "c": ["weil", true],
        "d": ["denn", false]
    },
    {
        "g": "Das Wetter ist schön, -- wir gehen spazieren.",
        "e": "The weather is nice, so we're going for a walk.",
        "a": ["also", true],
        "b": ["aber", false],
        "c": ["obwohl", false],
        "d": ["wenn", false]
    },
    {
        "g": "Der Film war spannend, -- ich habe ihn zweimal gesehen.",
        "e": "The movie was exciting, so I watched it twice.",
        "a": ["trotzdem", false],
        "b": ["deshalb", true],
        "c": ["sondern", false],
        "d": ["doch", false]
    },
    {
        "g": "Hast du heute -- gemacht?",
        "e": "Did you do anything today?",
        "a": ["etwas", true],
        "b": ["jemand", false],
        "c": ["niemand", false],
        "d": ["alles", false]
    },
    {
        "g": "Wir müssen leise sein, -- das Baby schläft.",
        "e": "We have to be quiet because the baby is sleeping.",
        "a": ["denn", true],
        "b": ["oder", false],
        "c": ["aber", false],
        "d": ["trotzdem", false]
    },
    {
        "g": "Ich gehe oft ins Fitnessstudio, -- fit zu bleiben.",
        "e": "I go to the gym often to stay fit.",
        "a": ["damit", true],
        "b": ["wenn", false],
        "c": ["obwohl", false],
        "d": ["denn", false]
    },
    {
        "g": "Kannst du das Fenster --?",
        "e": "Can you open the window?",
        "a": ["aufmachen", true],
        "b": ["anmachen", false],
        "c": ["ausgehen", false],
        "d": ["abfahren", false]
    },
    {
        "g": "Wir müssen -- Hausaufgaben machen.",
        "e": "We have to do our homework.",
        "a": ["unsere", true],
        "b": ["unser", false],
        "c": ["unserem", false],
        "d": ["unseren", false]
    },
    {
        "g": "Wir haben genug --.",
        "e": "We have enough water.",
        "a": ["Milch", false],
        "b": ["Wasser", true],
        "c": ["Saft", false],
        "d": ["Brot", false]
    },
    {
        "g": "Bitten Sie mich nicht noch einmal --.",
        "e": "Don’t ask me for it again.",
        "a": ["darauf", false],
        "b": ["davor", false],
        "c": ["daran", false],
        "d": ["darum", true]
    },
    {
        "g": "Bin gleich --.",
        "e": "Be right back.",
        "a": ["dran", false],
        "b": ["weg", false],
        "c": ["zurück", true],
        "d": ["los", false]
    },
    {
        "g": "Sie ist nicht ganz --.",
        "e": "She’s not very easy.",
        "a": ["nett", false],
        "b": ["leicht", false],
        "c": ["einfach", true],
        "d": ["ruhig", false]
    },
    {
        "g": "Ich wünschte, ich könnte mehr --.",
        "e": "I wish I could do more.",
        "a": ["tun", true],
        "b": ["gehen", false],
        "c": ["machen", false],
        "d": ["sagen", false]
    },
    {
        "g": "Wie lange sind Sie schon --?",
        "e": "How long have you been together?",
        "a": ["zusammen", true],
        "b": ["verheiratet", false],
        "c": ["fertig", false],
        "d": ["hier", false]
    },
    {
        "g": "Wo, zum Teufel, warst du so --?",
        "e": "Where the hell have you been so long?",
        "a": ["oft", false],
        "b": ["spät", false],
        "c": ["lange", true],
        "d": ["fern", false]
    },
    {
        "g": "Ich habe erst gestern erfahren, dass die Prüfung -- wurde.",
        "e": "I only found out yesterday that the exam was postponed.",
        "a": ["fiel", false],
        "b": ["verschoben", true],
        "c": ["verpasst", false],
        "d": ["verloren", false]
    },
    {
        "g": "Was kann ich Ihnen --?",
        "e": "What can I bring you?",
        "a": ["bringen", true],
        "b": ["geben", false],
        "c": ["zeigen", false],
        "d": ["sagen", false]
    },
    {
        "g": "Sagen Sie es --.",
        "e": "Don’t tell anyone.",
        "a": ["niemandem", true],
        "b": ["jedem", false],
        "c": ["irgendwer", false],
        "d": ["alle", false]
    },
    {
        "g": "Ich verstehe überhaupt --.",
        "e": "I don’t understand anything at all.",
        "a": ["alles", false],
        "b": ["etwas", false],
        "c": ["nicht", false],
        "d": ["nichts", true]
    },
    {
        "g": "Wie halten Sie es --?",
        "e": "How do you endure it?",
        "a": ["dran", false],
        "b": ["aus", true],
        "c": ["hin", false],
        "d": ["runter", false]
    },
    {
        "g": "Es liegt ein weiter Weg -- uns.",
        "e": "There’s a long road ahead of us.",
        "a": ["neben", false],
        "b": ["hinter", false],
        "c": ["vor", true],
        "d": ["über", false]
    },
    {
        "g": "Sie hatte nur wenig --.",
        "e": "She had little luck.",
        "a": ["Zeit", false],
        "b": ["Glück", true],
        "c": ["Licht", false],
        "d": ["Hoffnung", false]
    }
]
`);
german.sort(() => Math.random() - 0.5);
