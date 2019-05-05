const chatWeb = {
    chatPage: function (chat) {
        return ` <!DOCTYPE>
<html>
    <head>
    <link rel="stylesheet" href="chat.css" />
        <title>Chat</title>
        </head>
        <body scroll="no">
        <div id="chat-app">
        <div class="display-panel">
        <div class="users-frame">
         ${chatWeb.getUserList(chat)}
           </div>
        
        <div class="messages-frame">
        ${chatWeb.getMessageList(chat)}
    </div>
    </div>
    ${chatWeb.getOutgoing(chat)}
        </div>
        </body>
        </html>`;
    },

    getMessageList: function (chat) {
        return `<ol class="messages">` +
            chat.messages.map(message => {
                return `<li>
    <div class="message">
        <div class="message-info">
        <span class="timestamp">${message.timestamp}</span>
    </div>
    <div class="meta-info">
        <div class="sender-info">
        <div class="image-header">
        <img class="avatar" alt="user-avatar" src="images/avatar-bao.jpg" />
        </div>
        <span class="username">${message.sender}</span>
        </div>
        <div class="message-border">
        <p class="message-text">${message.text}</p>
    </div>
    </div>
    </div>
    </li>`
            }).join('') + `</ol>`;
    },
    getUserList: function (chat) {
        return `<ul class="users">` +
            chat.users.map(user => `
      <li>
        <div class="user">
          <span class="username">${user.username}</span>
        </div>
      </li>
    `).join('') +
            `</ul>`;

    },
    getOutgoing: function (chat) {
        return `<div class="outgoing">
        <form action="/chat" method="post">
        <input name="text" class="to-send" type="text" value="" placeholder="Enter message to send" />
         <input name="name" class="to-send" type="hidden" value='${chat.currentuser}' placeholder="Enter message to send" />
        <button class="send-button" type="submit">Send</button>
 
        </form>
        <div class="button-set">
        <form action="/logout" method="post">
         <input name="name" class="to-send" type="hidden" value='${chat.currentuser}' placeholder="Enter message to send" />
         <button class="logout-button" type="submit">Logout</button>
            </form>
            <form action="/refresh" method="post">
         <button class="refresh-button" type="submit"> Refresh</a></button>
          <input name="name" class="to-send" type="hidden" value='${chat.currentuser}' placeholder="Enter message to send" />
         </form>
        </div>
        </div>`;
    }
};
module.exports = chatWeb;
