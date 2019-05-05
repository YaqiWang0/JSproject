(function IIFE(){
        const usernameToSend=document.querySelector(".login input");
        const toSend = document.querySelector(".to-send");
        const sendButton = document.querySelector(".send button");
        const loginButton=document.querySelector(".login button");


        if(toSend && sendButton) {
            sendButton.disabled = !toSend.value;
            toSend.addEventListener('input', (e) => {
                sendButton.disabled = !e.target.value;
            });
        }

        if(loginButton&&usernameToSend){
            loginButton.disabled=!usernameToSend.value;
            usernameToSend.addEventListener('input',(e)=>{
                loginButton.disabled = !e.target.value;
            })
        }

        document.querySelector('.send button').addEventListener("click",()=> {
            event.preventDefault();
            const username=document.querySelector('.send input').value;
            const text=document.querySelector('.send .to-send').value;
            fetch('/messages/', {
                method: 'POST',
                headers: new Headers({
                    'content-type': 'application/json'
                }),
                body: JSON.stringify({username,text})

            }).then(response=>{
                if(response.ok){
                    refresh();
                }
                return response.json().then(err => Promise.reject(err) );
            })
                .catch(
                    err=>{
                        if(!document.querySelector('.err')){
                            const errorMessage=document.createElement('p');
                            errorMessage.classList.add('err');
                            errorMessage.innerText=`${err.message}`;
                            document.querySelector('body').appendChild(errorMessage);
                        }
                    }
                    )

        });

        setInterval(refresh,5000);

      function addMessage(body) {
          const userList=getUserList(body.users);
          const messageList=getMessageList(body.messages);
          return userList+messageList;
        }
        function getUserList(users) {
            return `
      <ul class="users">
        ${ Object.values(users).map(user=> `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>`
            ).join('') }
      </ul>`;
        }

        function getMessageList(messages){
            return `
      <ol class="messages">
      ${ messages.map(message=> `
      <li>
        <div class="message">
          <div class="meta-info">
            <div class="sender-info">
              <span class="username">${message.sender}</span>
            </div>
            <div class="message-info">
              <span class="timestamp">${message.timestamp}</span>
            </div>
          </div>
          <p class="message-text">${message.text}</p>
        </div>
      </li>` ).join('') }
      </ol>`;
        }

        function refresh() {
            fetch('/messages/').then(response => {
                const error=document.querySelector('.err');
                if(response.ok&&toSend && sendButton){

                    if(error){
                        error.parentElement.removeChild(error);
                    }
                    return response.json();
                }
                return response.json().then(err => Promise.reject(err) );
            }).then(body=>{
                document.querySelector('.display-panel').innerHTML=addMessage(body);
            }).catch(err=>{

        if(!document.querySelector('.err')){
            const errorMessage=document.createElement('p');
            errorMessage.classList.add('err');
            errorMessage.innerText=`${err.message}`;
            document.querySelector('body').appendChild(errorMessage);
            sendButton.disabled=true;
        }
    })
}



}

)();