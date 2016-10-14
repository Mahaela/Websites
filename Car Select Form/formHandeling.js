window.onload =initForms;

function initForms(){
    for(var i = 0; i < document.forms.length; i++){
        document.forms[i].onsubmit = function(){return validForm();}
    }
    document.getElementById("zip").disabled = true;
    document.getElementById("dealerList").disabled = true;
    document.getElementById("sunroof").onclick = doorSet;
    document.getElementById("zipRadio").onclick = dListLock;
    document.getElementById("dealerListRadio").onclick = zipLock;
}

function doorSet(){
    console.log("checked");
    if(this.checked){
        document.getElementById("twoDoor").checked = true;
        document.getElementById("fourDoor").disabled = true;
    }
    else{
        document.getElementById("fourDoor").disabled = false;
    }
}

function dListLock(){
    document.getElementById("dealerList").disabled = true;
    document.getElementById("zip").disabled = false;
}

function zipLock(){
    document.getElementById("zip").disabled = true;
    document.getElementById("dealerList").disabled = false;
}
    
function validForm(){
    var canSubmit = true;
    var zip = document.getElementById("zip").value;
    var email = document.getElementById("emailAddr").value;
    
    canSubmit = validZip();
    
    if(canSubmit && !validEmail()){
        canSubmit = false;
    }
    
    function validZip(){
        if(document.getElementById("dealerListRadio").checked){
            return true;
        }
        else if(isNaN(zip) || zip.length < 5){
            return false;
        }
        else return true;
    }
    
    function validEmail(){
        var invaldChars = "/:,;";
        
        if(email == ""){
            return false;
        }
        //check for invalid chars
        for(var k=0; k<invalidChars.length; k++){
            var iChar = invaldChars.charAt(k);
            if(email.indexOf(badChar)>-1){
                return false;
            }
        }
        
        //return false if @ is in the first position or not present
        var atPos = email.indexOf("@");
        if(atPos == -1 || atPos == 0){
            return false;
        }
        
        //return false if there is a second @
        if(email.indexOf("@", atPos+1) != -1){
            return false;
        }
        
        //return false if . is not present after the @
        var perPos = email.indexOf(".", atPos);
        if(periodPos == -1){
            return false;
        }
        
        //return false if there is a second . after @
        if(email.indexOf(".", perPos+1) != -1){
            return false;
        }
        
        //return false if . is less than 3 characters from the end
        if(periodPos+3 > email.length){
            return false;
        }
        
        return true;
    }
}                       