window.onload = initAll();

var thisAd;
var adImages;

function initAll(){
    initBannerRotate();   
}

function initBannerRotate(){
    thisAd = 0;
    
    adImages = new Array ("Images/painting1.jpg", "Images/painting2.jpg", "Images/painting3.jpg", "Images/painting4.jpg", "Images/painting5.jpg", "Images/painting6.jpg", "Images/painting7.jpg", "Images/painting8.jpg", "Images/painting9.jpg", "Images/painting10.jpg", "Images/painting11.jpg", "Images/painting12.jpg");

    rotate();
}
function rotate(){
    if(thisAd == adImages.length){
        thisAd = 0;
    }
    document.getElementById("bannerAd").src = adImages[thisAd];
    thisAd++;
    setTimeout(rotate, 3 * 1000);
}