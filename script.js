var sec = document.getElementById('seconds');
var min = document.getElementById('min');
var pp = document.getElementById('play');
var sc= document.getElementById('sc');
var home= document.getElementById('hScore');
var away= document.getElementById('aScore');
var htf = document.getElementById('htf');
var atf = document.getElementById('atf');  

var homeF=0;
var awayF=0;

var hScore=0;
var aScore=0;

var minutes = 9;
var time;
var secondsR = 59;
var count = 1;

var sCount=1;
var scSec=24;
var scTime;

function addM(){
    minutes++;
    
    min.innerText=minutes;
//    clearInterval(time);
//     count++;
}
function subM(){
    minutes--;
    if(minutes<0){
        minutes=0;

    }
    min.innerText=minutes;
//    clearInterval(time);
//     count++;
}
function addS(){
    secondsR++;
    if(secondsR>60){
        secondsR=60
    }
    sec.innerText = secondsR;
    // clearInterval(time);
    // count++;

}
function subS(){
    secondsR--;
    if(secondsR<0){
        secondsR=59;
    }
    sec.innerText = secondsR;
    // clearInterval(time);
    // count++;
}

function play() {
    if (count % 2 === 0) {
        clearInterval(time);
    } else {
        time = setInterval(seconds, 1000);
    }
    count++;
}

function seconds() {
    min.innerText = minutes;

    sec.innerText = secondsR;
    secondsR--;
    
    if (secondsR === -1) {
        minutes--;

        if (minutes === -1) {
            minutes = 9;
            min.innerText = minutes;
            secondsR = 59;
            sec.innerText = secondsR;
            homeF=0;
            awayF=0;
            htf.innerText=homeF;
            atf.innerText=awayF;
            clearInterval(time);
        } else {
            min.innerText = minutes;
            secondsR = 59;
        }
    }
}

function scPlay() {
    if (sCount % 2 === 0) {
        clearInterval(scTime);
    } else {
        scTime = setInterval(scSeconds, 1000);
    }
    sCount++;
}

function scSeconds(){
    sc.innerText= scSec;
    if (scSec > 15) {
        sc.style.color = 'green';
        sc.innerText = scSec;
    } else if (scSec <= 15 && scSec >= 6) {
        sc.style.color = 'yellow';
        sc.innerText = scSec;
    }
    else if(scSec===0){
        clearInterval(scTime);
        sCount++;
    }
    else {
        
        sc.style.color = 'red';
        sc.innerText = scSec;
    }
    
    scSec--;
}
function scTF(){
    scSec=24;
    sc.innerText = scSec;

}
function scFT(){
    scSec=14;
    sc.innerText = scSec;

}
function addHScore(){
    hScore++;
    home.innerText=hScore;
}
function subHScore(){
    hScore--;
    if(hScore<=0){
        hScore=0;
    }
    home.innerText=hScore;
}
function addAScore(){
    aScore++;
    away.innerText=aScore;
}
function subAScore(){
    aScore--;
    if(aScore<=0){
        aScore=0;
    }
    away.innerText=aScore;
}
function addHTF(){
    homeF++;
    htf.innerText=homeF;
}
function subHTF(){
    homeF--;
    if(homeF<0){
        homeF=0;
    }
    htf.innerText=homeF;
}
function addATF(){
    awayF++;
    atf.innerText=awayF;
}
function subATF(){
    awayF--;
    if(awayF<0){
        awayF=0;
    }
    atf.innerText=awayF;
}


function reset(){  
      clearInterval(time);
      clearInterval(scTime);
      hScore=0;
      aScore=0;
      homeF=0;
      awayF=0;
    secondsR = 59;
    count = 1;
    sCount=1;
    scSec=24;
    minutes = 9;
   min.innerText = minutes;
   sec.innerText = secondsR;
   sc.innerText=scSec;
   home.innerText=hScore;
   away.innerText=aScore;
   atf.innerText=awayF;
   htf.innerText=homeF;


}

scSeconds();
seconds();