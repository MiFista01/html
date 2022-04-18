setInterval(progress_bar,10)
function progress_bar(){
    let h_screen = document.documentElement.clientHeight;
    let h_document = document.body.clientHeight;
    let scrolls = window.pageYOffset;
    let progress = (scrolls / (h_document-h_screen)) * 100;
    document.getElementById("progress_bar").style.width = String(progress)+"%";
}