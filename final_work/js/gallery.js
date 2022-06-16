let number = 0;
let bool = true;
let array_food = [["../img/food/tarta.jpg","Tarta de Santiago"],["../img/food/trenza.jpg","Trenza de Almudévar"],
["../img/food/catalana.jpg","Crema catalana"],["../img/food/ensaimada.jpg","Ensaimada"],["../img/food/gazpacho.jpg","Gazpacho"],
["../img/food/madrileño.jpg","Cocido madrileño"],["../img/food/caldereta.jpg","Caldereta de bogavante"],["../img/food/chanfaina.jpg","Chanfaina"],
["../img/food/escabeche.jpg","Escabeche"],["../img/food/pescado.jpg","Pescado frito"],["../img/food/pulpo.jpg","Pulpo Gallego"],
["../img/food/croquetas.jpg","Las croquetas"],["../img/food/caracoles.jpg","Caracoles en salsa de tomate"],
["../img/food/gamba.jpg","La gamba con gabardine"],["../img/food/ensalada.jpg","Ensalada de mariscos"]]
document.addEventListener("DOMContentLoaded", add_developments);
function add_developments(){
    let divs = "";
    for (i = 0; i<array_food.length; i++){
        divs += "<div class='img' onclick='change_img(this)' id='"+i+"'></div>"
    }
    document.getElementById("move").innerHTML = divs;
    for (i = 0; i<array_food.length; i++){
        document.getElementById(i).style.backgroundImage = "url("+array_food[i][0]+")"
        
    }
    document.getElementById("move_left").addEventListener("click", gallery_move_left);
    document.getElementById("move_right").addEventListener("click", gallery_move_right);
}
function gallery_move_right(){
    if (numb*(-1) <= array_food.length-10){
        numb -= 1;
        document.getElementById("move").style.marginLeft = numb*10+"vw";
    }else{
        numb = 0
        document.getElementById("move").style.marginLeft = numb*10+"vw";
    }
    console.log("right")
}
function gallery_move_left(){
    if (numb< 0){
        numb += 1;
        document.getElementById("move").style.marginLeft = numb*10+"vw";
    }else{
        numb = (array_food.length-9)*(-1);
        document.getElementById("move").style.marginLeft = numb*10+"vw";
    }
    console.log("left")
}
function gallery_change_bool(){
    bool = true
}
function change_img(elem){
    if (bool){
        for (i = 0; i<array_food.length; i++){
            if(elem.style.backgroundImage ===`url("`+ array_food[i][0]+`")`){
                document.getElementById("food_name").innerHTML = array_food[i][1];
                document.getElementById("index").style.backgroundImage = elem.style.backgroundImage;
                bool = false;
                clearInterval(change);
                change = setInterval(auto_change, 4000);
                setTimeout(gallery_change_bool,1000);
                break;
            }
        }
        
    }
}
let change = setInterval(auto_change, 3000)
function auto_change(){
    if(bool){
        for (i = 0; i<array_food.length; i++){
            if(document.getElementById("index").style.backgroundImage ===`url("`+ array_food[i][0]+`")`){
                try {
                    document.getElementById("food_name").innerHTML = array_food[i+1][1];
                    document.getElementById("index").style.backgroundImage = `url("`+array_food[i+1][0]+`")`;
                } catch (error) {
                    document.getElementById("food_name").innerHTML = array_food[0][1];
                    document.getElementById("index").style.backgroundImage = `url("`+array_food[0][0]+`")`; 
                }
                bool = false;
                setTimeout(gallery_change_bool,1000)
                break;
            }
        }
    }
}