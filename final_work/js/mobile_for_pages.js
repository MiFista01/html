setInterval(check_device,100);
let detect = new MobileDetect(window.navigator.userAgent);
function check_device(){
    detect = new MobileDetect(window.navigator.userAgent);
    if(detect.phone()){
        if(!document.getElementById("head").outerHTML.includes(`<link rel="stylesheet" type="text/css" media="screen" href="../css/mobile.css">`)){
            document.getElementById("head").innerHTML = document.getElementById("head").outerHTML+`<link rel='stylesheet' type='text/css' media='screen' href='../css/mobile.css'>`;
        }    
    }else{
        if(document.getElementById("head").outerHTML.includes(`<link rel="stylesheet" type="text/css" media="screen" href="../css/mobile.css">`)){
            document.getElementById("head").innerHTML = document.getElementById("head").outerHTML.split(`<link rel="stylesheet" type="text/css" media="screen" href="../css/mobile.css">`).join('');
        }
    }
}
