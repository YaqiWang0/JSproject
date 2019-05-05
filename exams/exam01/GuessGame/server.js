const express = require('express');
const app = express();
const PORT = 3000;
const words = require('./words');
const guessWeb = require('./guess-web');


app.use(express.static('./public'));

app.get('/', function (req, res) {


    res.send(guessWeb.guessPage(words));
    for(let key in words.guessList){
        delete words.guessList[key];
    }
    words.message="";
    words.guessListString="";
    words.secret="";
    words.turnCounter=1;


});
// app.get('/', (req, res) => {
//     res.send(chatWeb.chatPage(chat));
// });
app.post('/restart', express.urlencoded({
    extended: false
}), (req, res) => {
    checkIfSuccess();
    res.redirect('/');

});
//can not use get because if the secret has not been guessed, I need to send all the information.
    //
function checkIfSuccess(){
    if(words.ifSuccess==="true"){
        for(let key in words.guessList){
            delete words.guessList[key];
        }
        words.turnCounter=1;
        words.ifSuccess="false";
        words.message="";
        words.secret=words.resetSecret();
    }
    else {
        const guessList=req.body.guessList;
        const currentSecret=req.body.secret;
        const turnCounter=parseInt(req.body.turnCounter);
        words.turnCounter=turnCounter;
        words.transferList(guessList);
        if(currentSecret) {
            words.secret = currentSecret;
        }
        else{
            words.secret=words.resetSecret();
        }
        words.guessListString=words.formGuessListString();
        words.message = "you can not restart because you have not guessed the secret";
    }
}

app.post('/guess', express.urlencoded({
    extended: false
}), (req, res) => {
    const guess=req.body.guess;
    const username = req.body.guess.toUpperCase();
    const guessList=req.body.guessList;
    const currentSecret=req.body.secret;
    const turnCounter=parseInt(req.body.turnCounter);
    words.turnCounter=turnCounter;
        words.transferList(guessList);
    setSecret(currentSecret);
    checkGuess(username,guess);
    // Hardcode until we add a login
    words.guessListString=words.formGuessListString();
    res.redirect('/');
});

function setSecret(currentSecret){

    if(currentSecret) {
        words.secret = currentSecret;
    }
    else{
        words.secret=words.resetSecret();
    }
}

function checkGuess(username,guess){
    if(!words.validWords[guess]){
        words.message="invalid word";
        words.addGuess({guess,count:0});
    }
    else{
        if(username===words.secret) {
            words.message = `you have won the game in ${words.turnCounter} turns,now you could start the game again`;
            words.ifSuccess="true";
            words.addGuess({guess,count:guess.length});
        }
        else {
            const count = words.isSecret(username);
            words.message = `${count} matches`;
            words.turnCounter+=1;
            if(words.guessList[guess]){
                words.message = 'you have guessed this word,please try another one';
            }
            else{
            words.addGuess({guess,count});
                }
        }
    }
}

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
