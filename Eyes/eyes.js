window.onload = init;
document.onmousemove = getEvt;

var eyesCenterX=0;
var eyesCenterY=0;
var leftEye;
var rightEye;
var xDormant= true;
var lerpSpeed =0;

function init(){
    leftEye = document.getElementById("lOEye");
    rightEye = document.getElementById("rOEye");
    lerpSpeed = .01;
    
    leftEye.style.left = window.innerWidth/2 - leftEye.offsetWidth -leftEye.offsetWidth/2 + "px";
    rightEye.style.left = window.innerWidth/2 + -rightEye.offsetWidth - rightEye.offsetWidth/2 +"px";
    leftEye.style.top = window.innerHeight/2 - 2*leftEye.offsetHeight + "px"; 
    rightEye.style.top = window.innerHeight/2 - 2*rightEye.offsetHeight + "px"; 
}

function getEvt(evt){
    if (!evt){
        evt = window.event;
    }
    moveEyes(evt.clientX, evt.clientY)
}

function moveEyes(xPos, yPos){
    if(xDormant){
        if(xPos > (rightEye.offsetLeft + rightEye.offsetWidth) || xPos< leftEye.offsetLeft){
            xDormant = false;
            eyeFollowXAxis();
        }
    }
    else{
            eyeFollowXAxis();
        }   
   
   function eyeFollowXAxis(){
       console.log(xPos-leftEye.offsetLeft);
       leftEye.style.left = leftEye.offsetLeft +(lerpSpeed*(xPos-leftEye.offsetLeft)) + "px";
    }
}