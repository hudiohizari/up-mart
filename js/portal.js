function portal(vID){
    document.getElementsByClassName("portal")[0].style.display = "block";
    var x = document.getElementsByClassName("portalFrame");
    var i;
    
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    
    document.getElementById(vID).style.display = "block";
}
function portalHide(){
    var x = document.getElementsByClassName("portalFrame");
    var i;
    
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementsByClassName("portal")[0].style.display = "none";
}