let numb = 0;
let step = 0;
let count = 5;
function scroll_right(name) {
    if (step < count - 2) {
        step = step + 1;
    }
    numb = 24 * step * (-1);
    console.log(numb);
    document.getElementById(name).style.margin = String("0px" + " 0px" + " 0px"+" "+numb + "vw");
}

function scroll_left(name) {
    if (step > 0) {
        step = step - 1;
    }
    numb = 24 * step * (-1);
    document.getElementById(name).style.margin = String("0px" + " 0px" + " 0px"+" "+numb + "vw");
}
function show(name) {
    if (document.getElementById(name).style.transform == "scaleY(1)") {
        document.getElementById(name).style.transform = "scaleY(0)";
    } else {
        document.getElementById(name).style.transform = "scaleY(1)";
    }
}