let cx = 1920;
let cy = 1080;
let centerX = cx/2;
let centerY = cy/2;
createCanvas(cx,cy);
mouseWillMove();

mouseClicked(()=>{
    if(isInside(mouse,{x:centerX-(310/2),y:centerY-(116/2)+(130*0),width:310,height:116})){window.location = "./german.html"}
    if(isInside(mouse,{x:centerX-(310/2),y:centerY-(116/2)+(130*1),width:310,height:116})){window.location = "./dutch.html"}
    if(isInside(mouse,{x:centerX-(310/2),y:centerY-(116/2)+(130*2),width:310,height:116})){window.location = "./french/index.html"}
    if(isInside(mouse,{x:centerX-(310/2),y:centerY-(116/2)+(130*3),width:310,height:116})){window.location = "./scots/index.html"}
});


function language(name,number,about){
    selectColor("white")
    if(isInside(mouse,{x:centerX-(310/2),y:centerY-(116/2)+(130*number),width:310,height:116})){selectColor("green");}
    rect(centerX-(310/2),centerY-(116/2)+(130*number),310,116);
    selectColor("black");
    text(about,centerX,centerY-30+(130*number),"20px Serif");
    text(name,centerX,centerY+18+(130*number),"50px Serif");
}

function render(){
    bg("green");
    text("Confrère",centerX,centerY-200,"80px Serif");
    selectColor("lightgray");
    text("A Simple Free Clozemaster Alternative ",centerX,centerY-140,"Italic 40px Serif");
    language("GERMAN",0,"(A1-B1)");
    language("DUTCH",1,"(BETA)");
    language("FRENCH",2,"(B1-B2)");
    language("SCOTS",3,"(BETA)");
}
