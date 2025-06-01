let cx = 1920;
let cy = 1080;
let debug = false;
let toConjugate = false;

function save(sed){german = sed;}
let rects = [[595,529,310,116],[989,529,310,116],[595,689,310,116],[989,689,310,116]]
createCanvas(cx,cy)
bg("green")
let index = 0;
let question = [german[index].g,german[index].e,[german[index].a,german[index].b,german[index].c,german[index].d]];
let isCorrect = undefined;
// correct / total
let counter = [0,0];

/* Square Maker */
mouseWillMove();
let storedPos = [];
let currentPos = []
function startUp(){
    // alert("uau")
    storedPos = [mouse.x,mouse.y]
}

try{
    if(con[0]==true){
        toConjugate = true;
    }
}
catch(error){
    console.log(error)
}

mouseClicked(startUp)
function drawDebugger(){
    selectColor("white");
    text(`MX: ${mouse.x}, MY: ${mouse.y}, isCorrect: ${isCorrect}, Count: ${counter[0]}/${counter[1]}, I:${index}`,cx/2,cy-30,"40px Serif")
    text(`I/P: ${data.val}`,cx/2,cy-80,"40px Serif")
    circle(mouse.x,mouse.y,20)
    rect(storedPos[0],storedPos[1],mouse.x-storedPos[0],mouse.y-storedPos[1])
    text(mouse.x-storedPos[0],storedPos[0]+(textWidth(mouse.x-storedPos[0],"20px Serif")/2),storedPos[1]-10,"20px Serif")
    text(mouse.y-storedPos[1],storedPos[0]+(textWidth(mouse.x-storedPos[0],"20px Serif")/2),mouse.y+22,"20px Serif")
}
useKeys();
function up(){
    if(debug){storedPos=[];}
}
document.addEventListener('keydown', function(event) {
    if (event.key === '`') {
      debug = !debug;
      document.getElementById("texto").blur();
    }
});
function down(){if(debug){document.getElementById("texto").focus()}}
// function left(){debug=!debug;}
function right(){if(debug){document.getElementById("texto").blur()}}



/* Real Drawing Pipeline */

function rectangles(){
    for(let i=0;i<rects.length;i++){
        let r = rects[i];
        selectColor("white");
        if(isInside(mouse,{x:r[0],y:r[1],width:r[2],height:r[3]})&&isCorrect==undefined){selectColor("green");}
        if(isCorrect&&question[2][i][1]){selectColor("lightgreen");}else if(isCorrect!=undefined&&!isCorrect&&!question[2][i][1]){selectColor("red")}
        rect(r[0],r[1],r[2],r[3])
        selectColor("black")
        text(question[2][i][0],r[0]+(r[2]/2),r[1]+75,"60px Serif")
        selectColor("white");    
    }
}

function newQuestion(){
    isCorrect = undefined;
    question = [german[index].g,german[index].e,[german[index].a,german[index].b,german[index].c,german[index].d]];
}

mouseClicked(()=>{
    for(let i=0;i<rects.length;i++){
        let r = rects[i];
        if(isInside(mouse,{x:r[0],y:r[1],width:r[2],height:r[3]})){
            if(isCorrect==undefined){
                counter[1]++;
                index++;
                if(question[2][i][1]){
                    isCorrect = true;
                    counter[0]++;
                }else{
                    isCorrect = false;
                }
            }
        }
    }
    if(isInside(mouse,{x:595+(310/2)+50,y:689+160,width:310,height:116})){
        if(isCorrect!=undefined){
            newQuestion();
        }
    }
    if(isInside(mouse,{x:cx-320,y:cy-126,width:310,height:116})&&toConjugate==true){window.location = con[1]}
});

function draw(){
    bg('green')
    text("Confrère",cx/2,100,"80px Serif")
    text(question[0],cx/2,400,"80px Serif")
    selectColor("lightgray");
    text(question[1],cx/2,450,"Italic 40px Serif")
    rectangles()
    if(isCorrect!=undefined){
        selectColor("lightgray");
        if(isInside(mouse,{x:595+(310/2)+50,y:689+160,width:310,height:116})){
            selectColor("green")
        }
        rect(595+(310/2)+50,689+160,310,116);
        selectColor("black");
        text("Continue",595+(310/2)+50+(310/2),689+160+75,"60px Serif")
    }
    if(toConjugate){
        selectColor("white");
        if(isInside(mouse,{x:cx-320,y:cy-126,width:310,height:116})){selectColor("green")}
        rect(cx-320,cy-126,310,116);
        selectColor("black")
        text("Learn the "+con[2],cx-320+(310/2),cy-126+38,"Italic 30px Serif");
        text("Conjugations",cx-320+(310/2),cy-126+85,"45px Serif");
    }
    if(debug){
        drawDebugger();
    }
}

function render(){draw();}