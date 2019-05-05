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

function addUser(user) {
    users[user]=user;
}
function removeUser(user){
    delete users[user.username];
}
const chat = {
    users,
    messages,
    addMessage,
    addUser,
    removeUser
};

module.exports = chat;

