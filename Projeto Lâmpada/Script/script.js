var turnOn = document.getElementById('turnOn');
var turnOff = document.getElementById('turnOff');
var lamp = document.getElementById('Lamp');

function Broken () {
    return lamp.src.indexOf ('quebrada') > -1;
}

function LampOn (){
    if (!Broken () ) {
    Lamp.src ='./Imagens/ligada.jpg';
    }
}

function LampOff () {
    if (!Broken () ) {
    Lamp.src ='./Imagens/desligada.jpg';
    }
}

function LampBroken() {
    lamp.src= './Imagens/quebrada.jpg'
}



turnOn.addEventListener('click', LampOn);
turnOff.addEventListener('click', LampOff);
lamp.addEventListener('mouseover', LampOn)
lamp.addEventListener('mouseleave', LampOff)
Lamp.addEventListener('dblclick', LampBroken)