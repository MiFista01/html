document.addEventListener("DOMContentLoaded",add_event);
function add_event(){
    document.getElementById("menu").addEventListener("click",dmenu_show);
}
function dmenu_show(){
    if(document.getElementById("dmenu").style.transform == "" || document.getElementById("dmenu").style.transform == "scaleY(0)"){
        document.getElementById("dmenu").style.transform = "scaleY(1)"
    }else{
        document.getElementById("dmenu").style.transform = "scaleY(0)"
    }
    
}