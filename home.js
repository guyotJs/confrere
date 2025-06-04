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
    // if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*1),width:310,height:116})){window.location = "./dutch/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*1),width:310,height:116})){window.location = "./french/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*2),width:310,height:116})){window.location = "./scots/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*3),width:310,height:116})){window.location = "./normaund/index.html"}
    // Large for basic german
    if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*4),width:640,height:116})){window.location = "./basic/index.html"}

    if(isInside(mouse,{x:centerX-(310/2)+rightward,y:centerY-(116/2)-extraBoostUp+(130*0),width:310,height:116})){window.location = "./catalan/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+rightward,y:centerY-(116/2)-extraBoostUp+(130*1),width:310,height:116})){window.location = "./galician/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+rightward,y:centerY-(116/2)-extraBoostUp+(130*2),width:310,height:116})){window.location = "./wymysorys/index.html"}
    if(isInside(mouse,{x:centerX-(310/2)+rightward,y:centerY-(116/2)-extraBoostUp+(130*3),width:310,height:116})){window.location = "./aenglisc/index.html"}
});


function language(name,number,about){
    if(number<5){
        if(number!=4){
            // For left column
            selectColor("white")
            if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*number),width:310,height:116})){selectColor("green");}
            rect(centerX-(310/2)+leftward,centerY-(116/2)-extraBoostUp+(130*number),310,116);
            selectColor("black");
            text(about,centerX+leftward,centerY-30-extraBoostUp+(130*number),"20px Serif");
            text(name,centerX+leftward,centerY+18-extraBoostUp+(130*number),"50px Serif");
        }
        else{
            // For basic German
            selectColor("white")
            if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*number),width:640,height:116})){selectColor("green");}
            rect(centerX-(310/2)+leftward,centerY-(116/2)-extraBoostUp+(130*number),640,116);
            selectColor("black");
            text(about,centerX,centerY-30-extraBoostUp+(130*number),"20px Serif");
            text(name,centerX,centerY+18-extraBoostUp+(130*number),"50px Serif");
        }
    }else{
        // For right column
        selectColor("white")
        if(isInside(mouse,{x:centerX-(310/2)+rightward,y:centerY-(116/2)-extraBoostUp+(130*(number-5)),width:310,height:116})){selectColor("green");}
        rect(centerX-(310/2)+rightward,centerY-(116/2)-extraBoostUp+(130*(number-5)),310,116);
        selectColor("black");
        text(about,centerX+rightward,centerY-30-extraBoostUp+(130*(number-5)),"20px Serif");
        if(number!=7){text(name,centerX+rightward,centerY+18-extraBoostUp+(130*(number-5)),"50px Serif");}
        else if(number=7){text(name,centerX+rightward,centerY+18-extraBoostUp+(130*(number-5)),"46px Serif");}
    }
}

function render(){
    bg("green");
    text("Confrère",centerX,centerY-200-extraBoostUp,"80px Serif");
    selectColor("lightgray");
    text("Learn Languages Free Forever.",centerX,centerY-140-extraBoostUp,"Italic 40px Serif");
    language("GERMAN",0,"(84sn)");
    language("FRENCH",1,"(40sn)");
    language("SCOTS",2,"(42sn)");
    language("NORMAN",3,"(10sn)");
    language("LEARN BASIC",4,"(German, Catalan)");
    language("CATALAN",5,"(40sn)");
    language("GALICIAN",6,"(96sn)");
    language("WYMYSORYS",7,"(10sn)");
    language("ÆNGLISĊ",8,"(10sn)");
}
