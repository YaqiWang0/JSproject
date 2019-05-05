import React from 'react';
import './chat.css';
import SingleMessage from './singleMessage'

const MessageList=({messages})=>(
    <ol className="messages">
        {
            Object.values(messages).map(message=>{
                return <SingleMessage message={message}/>
            })
        }
    </ol>
);

export default MessageList;