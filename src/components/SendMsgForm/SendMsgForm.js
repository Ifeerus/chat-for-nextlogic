import { useState } from "react";

import "./SendMsgForm.css";

const SendMsgForm = ({ activeConversation, onAddNewMsg }) => {
    const [newMsg, setNewMsg] = useState("");

    const onValueChange = (e) => {
        setNewMsg(e.target.value);
    };

    const onSendMsgByEnter = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            if (e.target.value !== "") {
                onAddNewMsg(activeConversation[0].id, newMsg);
                setNewMsg("");
            }
        }
    };

    const onSendMsg = (e) => {
        e.preventDefault();
        if (e.target.value !== "") {
            onAddNewMsg(activeConversation[0].id, newMsg);
            setNewMsg("");
        }
    };

    return (
        <form
            onSubmit={(event) => onSendMsg(event)}
            onKeyDown={(event) => onSendMsgByEnter(event)}
            className='send-message-form'
        >
            <textarea
                className='send-message-input'
                placeholder='Type a message...'
                type='text'
                value={newMsg}
                onChange={(event) => onValueChange(event)}
            />
            <button className='btn' type='submit'>
                <i className='uil uil-message'></i>
            </button>
        </form>
    );
};

export default SendMsgForm;
