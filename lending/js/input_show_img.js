function put_img(){
    let input = document.getElementById("img")
    input.click();
}
function show_img(){
    let img = document.getElementById("showImg");
    let input = document.getElementById("img").files[0];
    if (input) {
        img.src = URL.createObjectURL(input);
        localStorage.setItem('my_img', img.src);
    }
    img.src = localStorage.getItem('my_img');
}