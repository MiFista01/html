let numb = 0;
let step = 0;
let count = 5;
function scroll_left(name) {
    if (step < count - 2) {
        step = step + 1;
    }
    numb = 25 * step * (-1);
    console.log(numb);
    document.getElementById(name).style.margin = String("0px" + " 0px" + " 0px"+" "+numb + "vw");
    console.log(document.getElementsByClassName(name)[0].style);
}

function scroll_right(name) {
    if (step > 0) {
        step = step - 1;
    }
    numb = 25 * step * (-1);
    document.getElementById(name).style.margin = String("0px" + " 0px" + " 0px"+" "+numb + "vw");
    console.log(document.getElementsByClassName(name)[0].style);
}