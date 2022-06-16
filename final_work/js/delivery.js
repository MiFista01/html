let number = 0;
let tik = 0;
let summa = 0
let bool = true;
let food_delivery = [];
let array_food = [["../img/food/tarta.jpg","Tarta de Santiago",5.26],["../img/food/trenza.jpg","Trenza de Almudévar",7.48],
["../img/food/catalana.jpg","Crema catalana",7.11],["../img/food/ensaimada.jpg","Ensaimada",5.37],["../img/food/gazpacho.jpg","Gazpacho",4.15],
["../img/food/madrileño.jpg","Cocido madrileño",7.25],["../img/food/caldereta.jpg","Caldereta de bogavante",7.85],
["../img/food/chanfaina.jpg","Chanfaina",8.27],["../img/food/escabeche.jpg","Escabeche",3.42],["../img/food/pescado.jpg","Pescado frito",7.65],
["../img/food/pulpo.jpg","Pulpo Gallego",9.31],["../img/food/croquetas.jpg","Las croquetas",5.38],
["../img/food/caracoles.jpg","Caracoles en salsa de tomate",5.25],["../img/food/gamba.jpg","La gamba con gabardine",8.42],
["../img/food/ensalada.jpg","Ensalada de mariscos",3.63]]
document.addEventListener("DOMContentLoaded", add_developments);
function add_developments(){
    let divs = "";
    for (i = 0; i<array_food.length; i++){
        divs += `<div class='img' onclick='kind_click(this)' id=`+i+`></div>`;
    }
    document.getElementById("move").innerHTML = divs;
    for (i = 0; i<array_food.length; i++){
        document.getElementById(i).style.backgroundImage = "url("+array_food[i][0]+")"
        
    }
    document.getElementById("up").addEventListener("click", move_up);
    document.getElementById("down").addEventListener("click", move_down);
}
function move_down(){
    if (numb*(-1) <= (array_food.length-2)/2){
        numb -= 1;
    }else{
        numb = 0
    }
}
function move_up(){
    if (numb< 0){
        numb += 1;
    }else{
        if(((array_food.length-2)/2)%2 !=0){
            numb = ((array_food.length-2)/2+0.5)*(-1);
        }else{
            numb = (array_food.length-2)/2*(-1);
        }
    }
}
function change_bool(){
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
                setTimeout(change_bool,1000);
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
                setTimeout(change_bool,1000)
                break;
            }
        }
    }
}
let find1 = "no";
let find2 = "no";
let interval = 0;
let step_click = 0;
function kind_click(elem){
    if(step_click == 0){
        interval = setInterval(function(){step_tik(elem)},1);
        step_click = 1;
    }else{
        step_click = 2
    }
}
function step_tik(elem){
    tik += 1;
    if (tik == 60){
        take_name(elem);
        step_click = 0;
        tik = 0;
        clearInterval(interval);
    }else{
        if(step_click == 2){
            step_click = 0;
            tik = 0;
            remove_name(elem);
            clearInterval(interval);
        }
    }
}
function take_name(elem){
    for(i = 0; i<array_food.length; i++){
        if(elem.style.backgroundImage === `url("`+array_food[i][0]+`")`){
            find1 = i;
            break;
        }
    }
    if(food_delivery.length != 0){
        for(i = 0; i<food_delivery.length; i++){
            if(elem.style.backgroundImage === `url("`+food_delivery[i][0]+`")`){
                find2 = i;
                break;
            }
            
        }
    }
    if(find2 =="no"){
        food_delivery.push([array_food[find1][0],array_food[find1][1],array_food[find1][2],1,find1]);
    }else{
        food_delivery[find2][3] += 1;
    }
    for(i = 0; i<food_delivery.length; i++){
        summa += food_delivery[i][3]*food_delivery[i][2];
        document.getElementById(food_delivery[i][4]).innerHTML = `<p>`+food_delivery[i][3]+`</p>`;
    }
    document.getElementById("summa").innerHTML = summa.toFixed(2);
    summa = 0;
    find1 = "no";
    find2 = "no";
}
function remove_name(elem){
    for(i = 0; i<food_delivery.length; i++){
        if(elem.style.backgroundImage === `url("`+food_delivery[i][0]+`")`){
            if(food_delivery[i][3] > 0){
                food_delivery[i][3] -= 1;
            }
            if(food_delivery[i][3] > 0){
                document.getElementById(food_delivery[i][4]).innerHTML = `<p>`+food_delivery[i][3]+`</p>`;
            }else{
                document.getElementById(food_delivery[i][4]).innerHTML = `<p>`+`</p>`;
                
                food_delivery.splice(i,i)
                console.log(i)
            }
        }
        try {
            summa = summa+ food_delivery[i][3]*food_delivery[i][2];
        } catch (error) {
            
        }
    }
    if(food_delivery.length == 1 && food_delivery[0][3] == 0){
        food_delivery = [];
    }
    document.getElementById("summa").innerHTML = summa.toFixed(2);
    summa = 0
}
setInterval(change_pos,10);
function change_pos(){
    document.getElementById("move").style.marginTop = numb*2*(document.getElementById(0).clientHeight+Math.round(window.innerWidth/100)*2) +"px";
    console.log(document.getElementById(0).clientHeight);
    console.log(window.innerWidth/100)
}