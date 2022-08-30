let socket = new WebSocket("wss://javascript.info/article/websocket/chat/ws");

const sendMessage = () => {
    const message = document.getElementById('message');

    socket.send(message.value);
    return false;
}

const disconnectWebsocket = () => {
    socket.close();
}

sendButton = document.getElementById('send');
sendButton.addEventListener("click", sendMessage);

disconnectButton = document.getElementById('disconnect');
disconnectButton.addEventListener("click", disconnectWebsocket);

// message received - show the message in div#messages
socket.onmessage = function(event) {
  const message = event.data;

  const messageElem = document.createElement('div');
  messageElem.textContent = message;
  document.getElementById('messages').prepend(messageElem);
}

// on open - notifiy connection in div#messages
socket.onopen = function(event) {
    const messageElem = document.createElement('div');
    messageElem.textContent = "Connected to websocket!";
    document.getElementById('messages').prepend(messageElem);
}

// on close - notifiy disconnection in div#messages
socket.onclose = function(event) {
    const messageElem = document.createElement('div');
    messageElem.textContent = "Disconnected!";
    document.getElementById('messages').prepend(messageElem);
}

// on error - log error in console
connection.onerror = function (error) {
    console.log('WebSocket Error ' + error);
};

