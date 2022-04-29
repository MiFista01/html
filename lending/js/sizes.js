document.addEventListener("DOMContentLoaded", size);
let count = 0;

function size() {
    let client_window_height = 0;
    let client_window_weight = 0;
    if (sessionStorage.getItem("count") == null) {
        client_window_height = window.innerHeight;
        client_window_weight = window.innerWidth;
        sessionStorage.setItem("height", client_window_height);
        sessionStorage.setItem("width", client_window_weight);
        count += 1;
        sessionStorage.setItem("count", count);
    };
    let mass1 = document.getElementById("plus").querySelectorAll("figure");
    for (i = 0; i < mass1.length; i++) {
        mass1[i].style.width = String(sessionStorage.getItem("width") * 0.18) + "px";
    }
    let mass2 = document.getElementsByClassName("prise");
    for (i = 0; i < mass2.length; i++) {
        mass2[i].style.width = String(sessionStorage.getItem("width") * 0.20) + "px";
    }
}