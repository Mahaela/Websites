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
    var distance = Math.sqrt(Math.pow(xPos - leftEye.offsetLeft, 2) + Math.pow(yPos - leftEye.offsetTop, 2));
    
    var xSpeed = Math.abs(xPos - leftEye.offsetLeft)/distance;
    var ySpeed = Math.abs(yPos - leftEye.offsetTop)/distance;
    
    var leftEyeLeftDist = parseFloat(leftEye.style.left);
    
    leftEye.style.left = leftEyeLeftDist + (xSpeed * lerpSpeed * (xPos - leftEyeLeftDist)) + "px";
    leftEye.style.top = leftEye.offsetTop + (ySpeed * lerpSpeed * (yPos - leftEye.offsetTop)) + "px";
    
    //console.log();
    window.requestAnimationFrame(moveEyes);
}