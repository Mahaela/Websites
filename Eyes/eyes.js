window.onload = init;
document.onmousemove = getEvt;

var eyesCenterX=0;
var eyesCenterY=0;
var leftEye;
var rightEye;
var xDormant= true;
var lerpSpeed = 0.05;
var eyeSize = 6;
var xOffset = 0;
var xPos;
var yPos;
function init(){
    leftEye = document.getElementById("lOEye");
    rightEye = document.getElementById("rOEye");
    
    //size of outer eyes
    leftEye.style.height = eyeSize + "px";
    leftEye.style.width = eyeSize + "px";
    rightEye.style.height = eyeSize + "px";
    rightEye.style.width = eyeSize + "px";
    
    //begining positions of the eyes
    leftEye.style.left = window.innerWidth/2 - eyeSize - eyeSize/2 + "px";
    rightEye.style.left = window.innerWidth/2 + eyeSize/2 +"px";
    leftEye.style.top = window.innerHeight/2 + eyeSize/2 + "px"; 
    rightEye.style.top = window.innerHeight/2 + eyeSize/2 + "px"; 
}

function getEvt(evt){
    if(!xOffset){
        window.requestAnimationFrame(moveEyes);
        xOffset = 1;
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
        topBottom = 10;
    }
    else{
        topBottom = -10;
    }
    
    var distance = Math.sqrt(Math.pow(xPos + leftOffset - leftEyeLeftDist, 2) + Math.pow(yPos + topBottom - leftEyeTopDist, 2));
    var xSpeed = Math.abs(xPos + leftOffset - leftEyeLeftDist)/distance;
    var ySpeed = Math.abs(yPos + topBottom - leftEyeTopDist)/distance;
    
    leftEye.style.left = leftEyeLeftDist + (xSpeed * lerpSpeed * (xPos + leftOffset - leftEyeLeftDist)) + "px";
    leftEye.style.top = leftEyeTopDist + (ySpeed * lerpSpeed * (yPos + topBottom - leftEyeTopDist)) + "px";
    
    rightEye.style.left = parseFloat(leftEye.style.left) + 2 * eyeSize + "px";
    rightEye.style.top = parseFloat(leftEye.style.top) + "px";
    
    console.log(xSpeed * lerpSpeed * (xPos - (eyeSize + eyeSize/2) - leftEyeLeftDist));
    
    
    
    window.requestAnimationFrame(moveEyes);
}