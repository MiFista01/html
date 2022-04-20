function message_form(){
    let form = document.getElementById("message_form");
    if(form.hidden == true){
        form.hidden = false;
        document.getElementById("scr_body").style.overflow = "hidden";
    }else{
        form.hidden = true;
        document.getElementById("scr_body").style.overflow = "auto"
    }
}