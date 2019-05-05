const express = require('express');
const chat=require('./chat');
const app = express();
const PORT = 4000;


app.get('/messages/',(req,res)=>{
    res.json(chat.messages);
});
app.post('/messages/',express.json(),(req,res)=>{
    chat.addMessage(req.body);
    res.sendStatus(200);
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );