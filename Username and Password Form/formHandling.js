window.onload = init;

function init(){
    for(var i=0; i<document.forms.length; i++){
        document.forms[i].onsubmit = function(){return validForm();} 
    }
}

function validForm(){
    var allGood = true;
    var allTags = document.getElementsByTagName("*");
    for(var i = 0; i < allTags.length; i++){
        if(allTags[i].className.indexOf("reqd") > -1){
            if(!checkRequiredFields(allTags[i])){
                allGood = false;
            }
        }
    }
    if(!passwordsMatch()){
        allGood = false;
    }
    return allGood;
}
function checkRequiredFields(thisTag){      
    if(thisTag.value == ""){
        if (thisTag.className.indexOf("invalid") <=-1){
            thisTag.className += " invalid";
            return false;
        }
    }
    else if(thisTag.className.indexOf("invalid") > -1){
        thisTag.className = thisTag.className.replace(" invalid","");
    }
}

function passwordsMatch(){
    //check that both passwords have values
    if(document.getElementById("passwd1").className.indexOf("invalid") <= -1 && 
      document.getElementById("passwd2").className.indexOf("invalid") <= -1){
        //check that both passwords are the same
        if(document.getElementById("passwd1").value != document.getElementById("passwd2").value){
            document.getElementById("passwd2").value = "";
            if(document.getElementById("passwd2").parentNode.className.indexOf("invalid") <=-1){
                document.getElementById("passwd2").parentNode.className += " invalid";
            }
            
        }
        else if(document.getElementById("passwd2").parentNode.className.indexOf("invalid") > -1){
            document.getElementById("passwd2").parentNode.className = document.getElementById("passwd2").parentNode.className.replace(" invalid","");
        }
    }
}

    
    