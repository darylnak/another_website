

function showAbout(){
    document.getElementById("content_landing").style.display = "none";
    document.getElementById("content_about").style.display = "block";

    var t1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    t1.add({
        targets: '.name',
        top: '20%',
        opacity: 1,
        duration: 500
    });
}

function showLanding(){
    var t1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    t1.add({
        targets: '.name',
        top: '20%',
        opacity: 0,
        duration: 500
    });
    document.getElementById("content_landing").style.display = "block";
}

window.onload = function typeWriter() {
    let page = document.getElementById("slogan");
    let isOn = true;
    const speed = 650;
    let idx = 0;
    let txt = 'Daryl Nakamoto';
    let randTypeTime = Math.floor(Math.random() * 80) + 20;

    while (idx < txt.length) {
        typeChar(txt, page, idx)
        idx++;
        randTypeTime = Math.floor(Math.random() * 80) + 20;
        setTimeout(typeChar, randTypeTime);
    }
}

function typeChar(txt, page, idx) {
    page.innerHTML += txt.charAt(idx);
}

active = false;

setInterval(() => {
    if(isOn && document.getElementById("slogan") && document.getElementById("slogan").textContent.localeCompare(txt) === 0) {
        document.getElementById("blinker").style.opacity = 0;
        isOn = false;
    }
    else if (isOn && document.getElementById("abt").textContent.localeCompare(txt) === 0){
        document.getElementById("blinker").style.opacity = 0;
        isOn = false;
    }
    else{
        document.getElementById("blinker").style.opacity = 1;
        isOn = true;
    }
}, speed);