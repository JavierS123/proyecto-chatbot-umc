const closeChatButton = document.querySelector('.chat-close-icon');
const chatContainer = document.querySelector('.chat-container');
const botContainer = document.querySelector('.bot-container');
const botPopup = document.querySelector('.bot-popup');



function centrarPopup() {
    //Se obtiene los valores del tamano del contenedor padre y el contenedor hijo
    let botContainerWidth = botContainer.offsetWidth;
    let botContainerHeight = botContainer.offsetHeight;
    let popupWidth = botPopup.offsetWidth;
    let popupHeight = botPopup.offsetHeight;

    //Calcula la posicion y la centra
    let leftPosition = (botContainerWidth - popupWidth) / 2;
    let topPosition = (botContainerHeight - popupHeight) / 2;

    //Aplica el valor obtenido al HTML
    botPopup.style.position = "absolute;"
    botPopup.style.left = leftPosition + "px";
    botPopup.style.top = topPosition + "px";
}

var gifs = ["./img/default.gif", "./img/sleepstart.gif", "./img/sleeploop.gif"];
var currentGif = 1;
var gifIndex = 0
let intervalID = setInterval(changeGif, 6000);


function changeGif() {
    var botBackground = document.querySelector('.bot-background');
    if (currentGif === 1) {
        botBackground.style.backgroundImage = "url('" + gifs[gifIndex] + "')"// primero ejecuta [0] default.gif luego lo aumenta
        gifIndex++;
        currentGif = 2;        
    } else if (currentGif === 2) {
        botBackground.style.backgroundImage = "url('" + gifs[gifIndex] + "')"// ejecuta [1] sleepstart luego lo aumenta
        gifIndex++ // 
        currentGif = 3;
    } else if (currentGif === 3) {
        botBackground.style.backgroundImage = "url('" + gifs[gifIndex] + "')" // ejecuta [2] sleeploop y queda ahi
        currentGif = 4;
    } else if (currentGif === 4) {
        // el sleeploop se quedará en loop infinito
    }
}

//cuando carga la pagina y cuando cambia de tamano llama a la funcion para centrar siempre al robot 
window.addEventListener("load", centrarPopup);
window.addEventListener("resize", centrarPopup);


//Funciones para abrir y cerrar el chat
botContainer.addEventListener('click', openChat);

function openChat() {
    botContainer.setAttribute('id', 'inactive');
    chatContainer.removeAttribute('id', 'inactive')
}

closeChatButton.addEventListener('click', closeChat);

function closeChat() {
    chatContainer.setAttribute('id', 'inactive');
    botContainer.removeAttribute('id', 'inactive');
}
