import React from 'react';
import './chat.css';
import UserList from './userList';
import MessageList from './messageList';
import OutGoing from './outGoing';



const ChatApp =({users,messages,addMessage,handleChange})=>{


        return(
            <div id="chat-app">
                <div className="display-panel">
                    <div className="users-frame">
                        <UserList users={users}/>
                    </div>
                    <div className="messages-frame">
                        <MessageList messages={messages}/>
                    </div>
                </div>
                <OutGoing   onKey={addMessage} onChange={handleChange}/>
            </div>
        )

};
export default ChatApp;