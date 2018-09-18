/* PRODUK JS */
function produkMenu(vID){
    var x = document.getElementsByClassName("produkFrameView");
    var i;
    
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    
    document.getElementById(vID).style.display = "block";
}