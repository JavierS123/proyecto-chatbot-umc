const closeChatButton = document.querySelector('.chat-close-icon')
const chatContainer = document.querySelector('.chat-container')
const chatPopup = document.querySelector('.chat-popup')

chatPopup.addEventListener('click', openChat);
function openChat(){
    chatPopup.setAttribute('id', 'inactive');
    chatContainer.removeAttribute('id', 'inactive')
}
closeChatButton.addEventListener('click', closeChat);


function closeChat() {
    chatContainer.setAttribute('id', 'inactive');
    chatPopup.removeAttribute('id', 'inactive');
}
