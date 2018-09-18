// VIDEO JS
function videoMovieControl(){
    var x, y;
    x = document.getElementById("videoPlayer");
    y = document.getElementById("bannerAfterVideo");
    
    x.style.display = "none";
    y.style.display = "block";
}

var screenWidth = window.innerWidth;
if(screenWidth <= 720){
    var x,y;
    x = document.getElementById("videoPlayer");
    y = document.getElementById("bannerAfterVideo");
    y.style.display = "block";
    x.style.display = "none";
    x.autoplay = false;
    x.load();
}