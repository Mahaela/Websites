window.onload = init;
document.onmousemove = getEvt;

var eyesCenterX=0;
var eyesCenterY=0;
var leftEye;
var rightEye;
var xDormant= true;
var lerpSpeed = 0.0001;
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
        
    }
    if (!evt){
        evt = window.event;
    }
    
    xPos = evt.clientX;
    yPos = evt.clientY;
    
    window.requestAnimationFrame(moveEyes);
}

function moveEyes(){
    console.log(lerpSpeed*(xPos-leftEye.offsetLeft));
    leftEye.style.left = leftEye.offsetLeft +(lerpSpeed*(xPos-leftEye.offsetLeft)) + "px";        window.requestAnimationFrame(moveEyes);
}