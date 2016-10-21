window.onload = init;
document.onmousemove = getEvt;

var eyesCenterX=0;
var eyesCenterY=0;
var leftEye;
var rightEye;
var xDormant= true;
var lerpSpeed = 0.05;
var eyeSize = 30;
var eyeballSize = 4;
var following = false;
var xPos = 0;
var yPos = 0;
var eyeballCen = 0;

function init(){
    leftEye = document.getElementById("lOEye");
    rightEye = document.getElementById("rOEye");
    leftEyeball = document.getElementById("lIEye");
    rightEyeball = document.getElementById("rIEye");
    
    //size of outer eyes
    leftEye.style.height = eyeSize + "px";
    leftEye.style.width = eyeSize + "px";
    rightEye.style.height = eyeSize + "px";
    rightEye.style.width = eyeSize + "px";
    
    //size of eyeballs
    leftEyeball.style.height = eyeballSize + "px";
    leftEyeball.style.width = eyeballSize + "px";
    rightEyeball.style.height = eyeballSize + "px";
    rightEyeball.style.width = eyeballSize + "px";
    
    //begining positions of the eyes
    leftEye.style.left = window.innerWidth/2 - eyeSize - eyeSize/2 + "px";
    rightEye.style.left = window.innerWidth/2 + eyeSize/2 + "px";
    leftEye.style.top = window.innerHeight/2 + eyeSize/2 + "px"; 
    rightEye.style.top = window.innerHeight/2 + eyeSize/2 + "px";    
    
    //begining positions of the eyeblls
    eyeballCen = eyeSize/2 - eyeballSize;
    leftEyeball.style.left = eyeballCen + "px";
    leftEyeball.style.top = eyeballCen + "px";
    rightEyeball.style.left = eyeballCen + "px";
    rightEyeball.style.top = eyeballCen + "px";
}

function getEvt(evt){ 
    
    if(!following){
        window.requestAnimationFrame(moveEyes);
        following = true;
    }
    
    if (!evt){
        evt = window.event;
    }
    
    xPos = evt.clientX;
    yPos = evt.clientY;
    
}

function moveEyes(){
    var leftEyeLeftDist = parseFloat(leftEye.style.left);
    var leftEyeTopDist = parseFloat(leftEye.style.top);
    var leftOffset = - (eyeSize + eyeSize/2)
    
    var topBottom = yPos - leftEyeTopDist;
    if(topBottom < 0){
        topBottom = 50;
    }
    else{
        topBottom = -80;
    }
    
    var distance = Math.sqrt(Math.pow(xPos + leftOffset - leftEyeLeftDist, 2) + Math.pow(yPos + topBottom - leftEyeTopDist, 2));
    var xNorm = (xPos + leftOffset - leftEyeLeftDist)/distance;
    var yNorm = (yPos + topBottom - leftEyeTopDist)/distance;
    var xSpeed = Math.abs(xNorm);
    var ySpeed = Math.abs(yNorm);
    
    leftEye.style.left = leftEyeLeftDist + (xSpeed * lerpSpeed * (xPos + leftOffset - leftEyeLeftDist)) + "px";
    leftEye.style.top = leftEyeTopDist + (ySpeed * lerpSpeed * (yPos + topBottom - leftEyeTopDist)) + "px";
    
    rightEye.style.left = parseFloat(leftEye.style.left) + 2 * eyeSize + "px";
    rightEye.style.top = parseFloat(leftEye.style.top) + "px";
  
    moveEyeballs();
  
    function moveEyeballs(){
        var eyeballDist = Math.sqrt(Math.pow(xPos + leftOffset - leftEyeLeftDist, 2) + Math.pow(yPos - leftEyeTopDist, 2));
        var xEBNorm = (xPos + leftOffset - leftEyeLeftDist)/eyeballDist;
        var yEBNorm = (yPos - leftEyeTopDist)/eyeballDist;
      
        leftEyeball.style.left = eyeballCen + (eyeSize/2 - eyeballSize/2) * xEBNorm + "px";
        leftEyeball.style.top = eyeballCen  + (eyeSize/2 - eyeballSize/2) * yEBNorm + "px";
        rightEyeball.style.left = eyeballCen + (eyeSize/2 - eyeballSize/2) * xEBNorm + "px";
        rightEyeball.style.top = eyeballCen + (eyeSize/2 - eyeballSize/2) * yEBNorm + "px";
    }
    
    window.requestAnimationFrame(moveEyes);
}