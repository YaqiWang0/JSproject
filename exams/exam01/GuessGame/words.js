const validWords= {
    TEA:"TEA",
    EAT:"EAT",
    TEE:"TEE",
    PEA:"PEA",
    PET:"PET",
    APE:"APE",

};

let secret=resetSecret();

let guessList={};
let guessListString="";

let ifSuccess="false";

let message="";

let turnCounter=1;

function addGuess(
    guess
                 ) {
   guessList[guess.guess]=guess;
}

function transferList(ListString) {
    if(ListString) {
        const guess = ListString.split(",");
        guess.map( item =>{
            if(item) {
                const temp = item.split(".");
                addGuess({guess: temp[0], count: temp[1]});
            }
        });
    }
}

function formGuessListString() {
let guessTemp="";
  for(let temp in guessList){
       guessTemp+=`${guessList[temp].guess}`+"."+`${guessList[temp].count}`+",";
   }
return guessTemp;
}

function resetSecret() {
    let index=Math.floor(Math.random()*Object.getOwnPropertyNames(validWords).length);
    let aim="";
    for(aim in validWords){
        if(index===0)
            break;
        else {
            index--;
        }
    }
    const currentSecret=validWords[aim];
    console.log(currentSecret);
    return currentSecret;
}

function isSecret(guess){
    let temp=secret;
    let count=0;
    for(let i=0;i<guess.length;i++){
        let index=temp.indexOf(guess.charAt(i),0);
        if(index>=0){
            count++;
            temp=temp.substr(0,index)+temp.substr(index+1,temp.length-1-index);
        }
    }
    return count;
}




const words = {
    validWords,
    guessList,
    ifSuccess,
    secret,
    message,
    turnCounter,
    guessListString,
    isSecret,
    addGuess,
    resetSecret,
    transferList,
    formGuessListString,

};

module.exports = words;

