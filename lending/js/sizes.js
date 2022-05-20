document.addEventListener("DOMContentLoaded", size);
let count = 0;
let path;

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
    path = ["img/fast.png", "img/prise.png", "img/prof.jpg"];


    let plus = document.getElementById("plus").querySelectorAll("figure");
    for (i = 0; i < plus.length; i++) {
        plus[i].style.width = String(sessionStorage.getItem("width") * 0.18) + "px";
    }
    let prise = document.getElementsByClassName("prise");
    for (i = 0; i < prise.length; i++) {
        prise[i].style.width = String(sessionStorage.getItem("width") * 0.2) + "px";
    }
    let message_img = document.getElementsByClassName("message_img");
    path = ["img/author1.jpg", "img/author2.jpg", "img/author3.jpg"];
    let insert_img = new Image();
    for (i = 0; i < message_img.length; i++) {
        insert_img.src = path[i];
        if (insert_img.width < insert_img.height) {
            message_img[i].style.backgroundSize = "100%";
        } else {
            message_img[i].style.backgroundSize = "auto 100%";
        }
        message_img[i].style.width = String(sessionStorage.getItem("width") * 0.08) + "px";
        message_img[i].style.height = String(sessionStorage.getItem("width") * 0.08) + "px";
        message_img[i].style.backgroundImage = "url(" + insert_img.src + ")";
    }
    let message_button = document.getElementById("button");
    message_button.style.fontSize = String(Math.round(sessionStorage.getItem("width") * 0.012)) + "px";
    message_button.style.padding = String(Math.round(sessionStorage.getItem("width") * 0.005)) + "px " + String(Math.round(sessionStorage.getItem("width") * 0.012)) + "px";
    let footer_img = new Image();
    path = "img/home.PNG"
    footer_img.src = path;
    let contact_img = document.getElementById("contact_img");
    footer_img.onload = function() {
        contact_img.style.width = String(Math.round(sessionStorage.getItem("width") * 0.2)) + "px";
        let relationship = this.width / this.height;
        contact_img.style.height = String(Math.round(sessionStorage.getItem("width") * 0.2 / relationship)) + "px";
        contact_img.style.backgroundImage = "url(" + footer_img.src + ")";
    };
}