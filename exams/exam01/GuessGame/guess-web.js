
const guessWeb = {
    guessPage: function(guess) {
        return `
   <DOCTYPE html>
   <html>
    <head>
    <link rel="stylesheet" href="guess.css" />
        <title>GuessGame</title>
        </head>
        <body scroll="no">
        <div class="guess-game">
       <div class="guess-list">
            <span class="guess-list-title">Guess List</span>  
            ${guessWeb.getGuessList(guess)}
       </div>
        ${guessWeb.getOutgoing(guess)}
         <div class="guess-list">
            <span class="guess-list-title">Valid Word</span>  
            ${guessWeb.getValidList(guess)}
       </div>
        </div>
        </body>
       
        
</html>
  `;
    },


    getGuessList: function(guess) {
        return ` <ul class="guesses">`+
            Object.values(guess.guessList).map(word =>`
            <li>
            <div class="guess">
            <span class="guess-name">${word.guess} ${word.count}</span>
            </div>
            </li>
            `).join('')+`</ul>`;

    },
    getOutgoing: function(guess) {
            return `
               <div class="guess-page">
            <form  class="guess-form" action="/guess" method="post">
            <span class="guess-label">Guess Game</span>
            
            <input required name="guess" class="username-to-send" type="text" value="" placeholder="Enter"/>
            <input name="guessList" type="hidden" value='${guess.guessListString}' />
             <input name="turnCounter" type="hidden" value='${guess.turnCounter}' />
              <input name="secret" type="hidden" value='${guess.secret}' />
            <span>${guess.message}</span>
              <span>round: ${guess.turnCounter}</span>
             <button class="send-button" type="submit">Guess</button>
             </form>
             <form action="/restart" method="post">
               <button class="send-button" type="submit">Restart</button>
               <input name="guessList" type="hidden" value='${guess.guessListString}' />
             <input name="turnCounter" type="hidden" value='${guess.turnCounter}' />
              <input name="secret" type="hidden" value='${guess.secret}' />
              </form>
            </div>
    `;
    },
    getValidList(guess){
      return ` <ul class="guesses">`+
            Object.values(guess.validWords).map(word =>`
            <li>
            <div class="guess">
            <span class="guess-name">${word}</span>
            </div>
            </li>
                `).join('')+`</ul>`;


    },
};


module.exports = guessWeb;
