window.onload = initAll;

function initAll(){
    document.getElementById("makeTextRequest").onclick = getNewFile;
    document.getElementById("makeXMLRequest").onclick = getNewFile;
}

function getNewFile(){
    makeRequest(this.href);
    return false;
}

function makeRequest(url){
    var xhttp, xmlDoc, txt, x, i;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;
            txt = "";
            x = xmlDoc.getElementsByTagName("choices");
            for (i = 0; i < x.length; i++) {
                txt += x[i].getElementsByTagName("label")[0].textContent;
            }
            document.getElementById("updateArea").innerHTML = txt;
        }
    };
    xhttp.open("GET", "us-states.xml", true);
    xhttp.send();
}