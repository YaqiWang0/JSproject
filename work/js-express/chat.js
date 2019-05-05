const users = [

];

const messages = [

];
let currentuser = "";

function addMessage({
    sender,
    timestamp,
    text
}) {
    messages.push({
        sender,
        timestamp,
        text
    });
}

function addUser({
    username
}) {
    users.push({
        username
    });
}

function removeUser(
    username
) {
    users.splice(users.indexOf(username));
}
const chat = {
    users,
    messages,
    currentuser,
    addMessage,
    addUser,
    removeUser
};

module.exports = chat;
