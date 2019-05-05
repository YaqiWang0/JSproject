const users = {};

const messages = {
'origin':{
    'sender':"puma",
    'timestamp':"past",
    'text': "hello"
}
};

function addMessage(message) {
    messages[message.timestamp]=message;
}


const chat = {
    users,
    messages,
    addMessage,

};

module.exports = chat;

