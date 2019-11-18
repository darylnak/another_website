function showAbout(){
    document.getElementById("content_landing").style.display = "none";
    document.getElementById("content_about").style.display = "block";
}

function showLanding(){
    document.getElementById("content_about").style.display = "none";
    document.getElementById("content_landing").style.display = "block";

}

let isOn = true;
const speed = 650;
let i = 0;
const txt = 'Made for humans';
let randTypeTime = Math.floor(Math.random() + 40) + 30;

window.onload = function typeWriter() {
    if (i < txt.length) {
        document.getElementById("slogan").innerHTML += txt.charAt(i);
        i++;
        randTypeTime = Math.floor(Math.random() * 80) + 60;
        setTimeout(typeWriter, randTypeTime);
    }
}

active = false;

setInterval(() => {
    if(isOn && document.getElementById("slogan").textContent.localeCompare(txt) == 0){
        document.getElementById("blinker").style.opacity = 0;
        isOn = false;
    }
    else{
        document.getElementById("blinker").style.opacity = 1;
        isOn = true;
    }
}, speed);

