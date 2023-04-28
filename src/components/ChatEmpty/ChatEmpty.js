import React from "react";
import "./ChatEmpty.css";

const ChatEmpty = () => {
    return (
        <div className='empty-chat'>
            <h1 className='empty-chat-text'>
                Select a contact to start conversation...
            </h1>
            <i className='uil uil-rocket'></i>
        </div>
    );
};

export default ChatEmpty;
