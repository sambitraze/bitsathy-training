const socket = io();
const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true});
console.log(username, room);

socket.on('message', message => {
    console.log(message);
    addMessageToDOM(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.emit('join', (username, room))

chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = e.target.elements.msg.value;
    socket.emit('sendMessage', message);
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

function addMessageToDOM(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.message}
    </p>`;
    document.querySelector('.chat-messages').appendChild(messageElement);
}