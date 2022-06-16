let path = ["img/index_back/back1.jpeg","img/index_back/back2.png","img/index_back/back3.jpeg","img/index_back/back4.jpeg"]
let numb = 0;
let boolean = true;
function change_back(number){
    let check = document.documentURI.split("/"); 
    let world = (element)=> element == "pages";
    let gallery = (element)=> element == "gallery.html";
    if(check.some(world)){
        document.getElementById("index").style.backgroundImage = "url(../"+path[number]+")"
        if(check.some(gallery)){
            document.getElementById("food_name").innerHTML = "";
        }
    }else{
        document.getElementById("index").style.backgroundImage = "url("+path[number]+")"
    }
}
function change_bool(){
    boolean = true
}
function move_left(){
    if(boolean){
        numb -= 1;
        if(numb < 0){
            numb = 3;
        }
        change_back(numb);
        boolean = false;
        setTimeout(change_bool,1001)
    }
}
function move_right(){
    if(boolean){
        numb += 1;
        if (numb > 3){
            numb = 0;
        }
        change_back(numb);
        boolean = false;
        setTimeout(change_bool,1001)
    }
    console.log("Adaadad")
}