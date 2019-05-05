import React from 'react';
import './chat.css';
import UserList from './userList';
import MessageList from './messageList';
import OutGoing from './outGoing';



const ChatApp =({users,messages,addMessage,handleChange,ifDisplay,ifDisabled,onClick,value,logOut})=>{


        return (
            <div id="chat-app" style={{display:ifDisplay}}>
                <div className="display-panel">
                    <div className="users-frame">
                        <UserList users={users}/>
                    </div>
                    <div className="messages-frame">
                        <MessageList messages={messages}/>
                    </div>
                </div>
                <OutGoing onKey={addMessage} onChange={handleChange} ifDisabled={ifDisabled} onClick={onClick} value={value} logOut={logOut}/>
            </div>
        )

};
export default ChatApp;