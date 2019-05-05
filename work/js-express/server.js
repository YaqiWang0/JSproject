const express = require('express');
const app = express();


const PORT = 3000;

const chat = require('./chat');
const chatWeb = require('./chat-web');
const loginForm = require('./login-form');

app.use(express.static('./public'));

app.get('/', function (req, res) {
    // const sess = req.session;
    // const loginUser = sess.loginUser;
    // const isLogined = !!loginUser;
    // if(isLogined)
    //
    // else{

    if (!chat.currentuser)
        res.redirect('/login');
    else {
        res.send(chatWeb.chatPage(chat));
        chat.currentuser = '';
     }
    //}

});
// app.get('/', (req, res) => {
//     res.send(chatWeb.chatPage(chat));
// });
app.get('/login', function (req, res) {
    res.send(loginForm.loginPage());
});

app.post('/login', express.urlencoded({
    extended: false
}), (req, res) => {
    const username = req.body; // Hardcode until we add a login
    chat.currentuser = req.body.username;
    const index=chat.users.findIndex(function(value) {
        return value.username===username.username;
    }); // 10
if(username.username&&index<0)
    chat.addUser(username);

    res.redirect('/');

});

app.post('/logout', express.urlencoded({
    extended: false
}), (req, res) => {
const user=req.body;
    chat.removeUser(user);
    chat.currentuser = '';
    res.redirect('/');
});

app.post('/refresh', express.urlencoded({
    extended: false
}), (req, res) => {
    chat.currentuser = req.body.name;
    res.redirect('/');
});

app.post('/chat', express.urlencoded({
    extended: false
}), (req, res) => {
    const sender = req.body.name;
    chat.currentuser = sender;
    // Hardcode until we add a login
    const {
        text
    } = req.body;
    if(req.body.text) {
        chat.addMessage({
            sender,
            text,
            timestamp: new Date()
        });
    }
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
