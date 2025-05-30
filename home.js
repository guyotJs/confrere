let cx = 1920;
let cy = 1080;
let centerX = cx/2;
let centerY = cy/2;
let extraBoostUp = 100;
let leftward = -165;
let rightward = 165;
createCanvas(cx,cy);
mouseWillMove();

mouseClicked(()=>{
    if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*0),width:310,height:116})){window.location = "./german/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*1),width:310,height:116})){window.location = "./dutch/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*2),width:310,height:116})){window.location = "./french/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*3),width:310,height:116})){window.location = "./scots/index.html"}
    
    if(isInside(mouse,{x:centerX-(310/2)+rightward,y:centerY-(116/2)-extraBoostUp+(130*0),width:310,height:116})){window.location = "./normaund/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+rightward,y:centerY-(116/2)-extraBoostUp+(130*1),width:310,height:116})){window.location = "./catalan/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+rightward,y:centerY-(116/2)-extraBoostUp+(130*2),width:310,height:116})){window.location = "./galician/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+rightward,y:centerY-(116/2)-extraBoostUp+(130*3),width:310,height:116})){window.location = "./wymysorys/index.html"}
});


function language(name,number,about){
    if(number<4){
        selectColor("white")
        if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*number),width:310,height:116})){selectColor("green");}
        rect(centerX-(310/2)+leftward,centerY-(116/2)-extraBoostUp+(130*number),310,116);
        selectColor("black");
        text(about,centerX+leftward,centerY-30-extraBoostUp+(130*number),"20px Serif");
        text(name,centerX+leftward,centerY+18-extraBoostUp+(130*number),"50px Serif");
    }else{
        selectColor("white")
        if(isInside(mouse,{x:centerX-(310/2)+rightward,y:centerY-(116/2)-extraBoostUp+(130*(number-4)),width:310,height:116})){selectColor("green");}
        rect(centerX-(310/2)+rightward,centerY-(116/2)-extraBoostUp+(130*(number-4)),310,116);
        selectColor("black");
        text(about,centerX+rightward,centerY-30-extraBoostUp+(130*(number-4)),"20px Serif");
        if(number!=7){text(name,centerX+rightward,centerY+18-extraBoostUp+(130*(number-4)),"50px Serif");}
        else if(number=7){text(name,centerX+rightward,centerY+18-extraBoostUp+(130*(number-4)),"46px Serif");}
    }
}

function render(){
    bg("green");
    text("Confrère",centerX,centerY-200-extraBoostUp,"80px Serif");
    selectColor("lightgray");
    text("A Simple Free Clozemaster Alternative ",centerX,centerY-140-extraBoostUp,"Italic 40px Serif");
    language("GERMAN",0,"(A1-B1)");
    language("DUTCH",1,"(BETA)");
    language("FRENCH",2,"(B1-B2)");
    language("SCOTS",3,"(BETA)");
    language("NORMAN",4,"(BETA)");
    language("CATALAN",5,"(BETA)");
    language("GALICIAN",6,"(BETA)");
    language("WYMYSORYS",7,"(BETA)");
}
