var xmlHttp = createXMLHttpRequestObject();

function createXMLHttpRequestObject(){
    var xmlHttp;
    
    if(window.ActiveXObject){
        try{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp = false;
        }
    }else{
        try{
            xmlHttp = new XMLHttpRequest(); ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp = false;
        }    
        
        if(!xmlHttp){
            alert("Something Went Wrong! Please try again later");
        }
        
    function process(){
        if(xmlHttp.readyState==4 || xmlHttp.readyState==0){
            
        }
    }
}