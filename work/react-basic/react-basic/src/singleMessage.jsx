import React from 'react'
import './chat.css';

const SingleMessage=({message})=>{
    return(
        <li>
            <div className="message">
                <div className="message-info">
                    <span className="timestamp">{message.timestamp}</span>
                </div>
                <div className="meta-info">
                    <div className="sender-info">
                        {/*<div className="image-header">*/}
                            {/*<img className="avatar" alt="user-avatar" src="./images/avatar-bao.jpg"/>*/}
                        {/*</div>*/}
                        <span className="username">{message.sender}</span>
                    </div>
                    <div className="message-border">
                        <p className="message-text">{message.text}</p>
                    </div>
                </div>
            </div>
        </li>
    )
};
    export default SingleMessage;