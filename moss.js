/*
    Built in Keystrokes
    Built in Mouse hover and click
    Built in render pipeline
*/
canvas = document.getElementById("myCanvas");
c = canvas.getContext("2d");

function hits(x,y,width,height,xx,yy,ww,hh){
    if(x < xx + ww &&
    x + width > xx &&
    y < yy + hh &&
    y + height > yy){
        return true;
    }  
    else{
        return false;
    }
}
function random(max){
    return Math.floor(Math.random() * max);
}
function createCanvas(width,height){
    canvas.width = width;
    canvas.height = height;
    this.stroke = true;
}
function image(img,x,y,w,h,opacity=1){
        c.globalAlpha = opacity;
        c.drawImage(img,x,y,w,h);
        c.globalAlpha = 1;
    }
function bg(color,opacity = 1){
    c.globalAlpha = opacity;
    c.fillStyle = color;
    c.fillRect(0,0,canvas.width,canvas.height);
    c.fillStyle = "#ffffff";
}
function rect(x,y,w,h,opacity = 1){
    c.globalAlpha = opacity;
    c.fillRect(x,y,w,h);
    if(this.stroke){
        c.strokeRect(x,y,w,h);
    }
}
function circle(x,y,r,opacity = 1){
    c.globalAlpha = opacity;
    c.beginPath();
    if(this.stroke){
        c.arc(x,y,r,0,Math.PI *2,);
        c.lineWidth += 10;
        c.stroke();
        c.lineWidth -= 10;
    }
    else{
        c.arc(x,y,r,0,Math.PI *2,);
    }
    c.fill();
    c.globalAlpha = 1;
}
function ellipse(x,y,w,h,r=0,opacity=1){
    c.globalAlpha = opacity;
    c.beginPath()
    if(this.stroke){
        c.ellipse(x, y, w, h, r, 0, 2 * Math.PI);
        c.stroke();
    }
    else{
        c.ellipse(x, y, w, h, r, 0, 2 * Math.PI);
    }
    c.fill()
    c.globalAlpha = 1;
}

function textWidth(text,size){
    c.font = size;
    let m = c.measureText(text)
    return m.width;
}

function text(text,x,y,stylings,opacity=1){
    c.globalAlpha = opacity;
    c.fillText(text,x-(textWidth(text,stylings)/2),y);
}
function line(x,y,xx,yy,opacity=1){
    c.globalAlpha = opacity;
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(xx,yy);
    c.stroke();
}
function selectColor(color){
    c.fillStyle = color;
}
function strokeColor(color){
    c.strokeStyle = color;
}
function noStroke(){
    this.stroke = false;
}
function strokeActive(){
    this.stroke = true;
}
function strokeSize(size){
    c.lineWidth = size;
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// Provide TWO arguments both canvas, and evt
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;

    // Adjust for scaling (if applied)
    var scaleX = canvas.width / canvas.clientWidth;
    var scaleY = canvas.height / canvas.clientHeight;
    x *= scaleX;
    y *= scaleY;

    return {x: x, y: y};
}
let mouse  = {}
function mouseWillMove(){
    document.getElementById("myCanvas").addEventListener('mousemove',function(evt){
        mouse = getMousePos(document.getElementById("myCanvas"),evt);
    });
};mouseWillMove();
function mouseClicked(func){
    document.getElementById("myCanvas").addEventListener('click',function(evt){
        func();
    });
}
// Provide TWO arguments both mousePos (from getMousePos), and an object array using {} (requires x, y, width, height ) 
function isInside(pos,rt){
    return pos.x > rt.x && pos.x < rt.x + rt.width && pos.y <rt.y+rt.height && pos.y > rt.y;
}

let leftKeyPressed = false;
let rightKeyPressed = false;
let upKeyPressed = false;
let downKeyPressed = false;
let key = "none";
function keyPressed(evt){
  if(evt.keyCode == 37){
      key = "pressed"
      leftKeyPressed = true;
  }
  else if(evt.keyCode == 39){
      key = "pressed"
      rightKeyPressed = true;
  }
  else if(evt.keyCode == 38){
      key = "pressed"
      upKeyPressed = true;
  }
  else if(evt.keyCode == 40){
      key = "pressed"
      downKeyPressed = true;
  }
}
function keyReleased(evt){
  if(evt.keyCode == 37){
      leftKeyPressed = false;
  }
  else if(evt.keyCode == 39){
      rightKeyPressed = false;
  }
  else if(evt.keyCode == 38){
      upKeyPressed = false;
  }
  else if(evt.keyCode == 40){
      downKeyPressed = false;
  }
}
let allowMultiMove = true;
function playerMove(){
    if(!downKeyPressed&&!upKeyPressed&&!leftKeyPressed&&!rightKeyPressed){
      key = "none"
    }
    if(allowMultiMove){
        if(leftKeyPressed){
            left()
          }
        if(rightKeyPressed){
            right()
          }
        if(upKeyPressed){
            up()
          }
        if(downKeyPressed){
            down()
        }
    }else{
        if(leftKeyPressed){
            left()
        }
        else if(rightKeyPressed){
            right()
        }
        else if(upKeyPressed){
            up()
        }
        else if(downKeyPressed){
            down()
        }
    }
}
function oneKeyAtATime(){
    allowMultiMove = false;
}
function useKeys(){
  requestAnimationFrame(useKeys)
  document.addEventListener('keydown',keyPressed);
  document.addEventListener('keyup',keyReleased);
  playerMove();
}
function main(){
    requestAnimationFrame(main)
    render()
};main();