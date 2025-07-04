let cx = 1920;
let cy = 1080;
createCanvas(cx,cy);

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let conjugationTypes = pro.length;
let isTrue = undefined;
let isDone = false;
let currentType = random(0,pro.length-1);
let currentVerb = random(0,pres.length-1);

function newQuestion(){
    data.val = "";
    document.getElementById("texto").value="";
    isDone = false;
    isTrue = undefined;
    currentType = random(0,pro.length-1);
    currentVerb = random(0,pres.length-1);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter'&&isTrue==undefined) {
        document.getElementById("texto").blur();
        let trueScribe = data.val;
        trueScribe = trueScribe.toLowerCase();
        isDone = true;
        if(trueScribe==pres[currentVerb][1][currentType]){
            isTrue = true;
        }else{isTrue = false;}
    }else if(event.key==='Enter'&&isTrue!=undefined){
        newQuestion()
    }
    if (event.key === '`'){
        setTimeout(1,()=>{
            document.getElementById("texto").focus();
        })
    }
});

function draw(){
    bg('green');
    strokeActive();
    text("Confrère",cx/2,100,"80px Serif");
    text(`${pro[currentType][1]} → ${pres[currentVerb][0][1]}`,cx/2,400,"80px Serif");
    selectColor("lightgray");
    text(`${pro[currentType][0]} → ${pres[currentVerb][0][0]}`,cx/2,450,"Italic 40px Serif");
    selectColor("white");
    if(isTrue){selectColor("lightgreen");}else if(isTrue!=undefined){selectColor("maroon")}
    rect(cx/2-(410/2),cy/2-(116/2)+70,410,116);
    selectColor("grey");
    if(data.val==""){text(pre,cx/2,cy/2+85,"Italic 60px Serif");}
    else{text(data.val,cx/2,cy/2+85,"Italic 60px Serif");}
    
    if(isDone){
        selectColor("lightgray");
        if(isInside(mouse,{x:595+(310/2)+50,y:689+160,width:310,height:116})){
            selectColor("green");
        }
        rect(595+(310/2)+50,689+160,310,116);
        selectColor("black");
        if(isTrue){text("Continue",595+(310/2)+50+(310/2),689+160+75,"60px Serif");}
        if(!isTrue){
            text("Continue",595+(310/2)+50+(310/2),689+160+47,"40px Serif");
            text("\""+pres[currentVerb][1][currentType]+"\"",595+(310/2)+50+(310/2),689+160+93,"Italic 40px Serif");
        }
    }

    selectColor("green");
    noStroke();
    rect(0,cy/2-(116/2)+70,754,116);
    rect(cx-754,cy/2-(116/2)+70,754,116);
    
}
function render(){draw();}

mouseWillMove();

mouseClicked(()=>{
    if(isInside(mouse,{x:cx/2-(410/2),y:cy/2-(116/2)+70,width:410,height:116})&&!isDone){
        setTimeout(()=>{document.getElementById("texto").focus();},0.5)
    }
    if(isInside(mouse,{x:595+(310/2)+50,y:689+160,width:310,height:116})){
        if(isDone){
            newQuestion();
        }
    }
})