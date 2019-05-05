const express = require('express');
const chat=require('./chat');
const app = express();
const PORT = 4000;

app.get('/chat',(req,res)=>{
    const username=req.query.username;
    chat.addUser(username);
    res.json({users:chat.users,messages:chat.messages});
});
app.get('/messages/',(req,res)=>{
    res.json({users:chat.users,messages:chat.messages});
});
app.post('/logout/',express.json(),(req,res)=>{
    chat.removeUser(req.body);
    res.sendStatus(200);
});
app.post('/messages/',express.json(),(req,res)=>{
    chat.addMessage(req.body);
    res.sendStatus(200);
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );