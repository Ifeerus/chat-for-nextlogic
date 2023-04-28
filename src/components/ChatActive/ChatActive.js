import Messages from "../Messages/Messages";
import SendMsgForm from "../SendMsgForm/SendMsgForm";

import "./ChatActive.css";

const ChatActive = ({ activeElement, activeConversation, onAddNewMsg }) => {
    const { name, avatar, status } = activeElement;
    let isOnline = false;
    if (status === "online") isOnline = !isOnline;

    const isSomeMessages =
        activeConversation[0].messages.length === 0 ? (
            <div className='noMsg-container'>
                <h1>No messages here yet...</h1>
                <h2>Send a message!</h2>
            </div>
        ) : (
            <Messages activeConversation={activeConversation} />
        );

    return (
        <div className='chat'>
            <div className='header'>
                <div className='user-info'>
                    <img className='avatar' src={avatar} alt='user1' />
                    <p>{name}</p>
                </div>
                <p>
                    {status}{" "}
                    <i
                        style={
                            isOnline
                                ? { "display": "inline" }
                                : { "display": "none" }
                        }
                        className='uil uil-circle'
                    ></i>
                </p>
            </div>
            <div className='msg-container'>
                <ul className='msg-list'>{isSomeMessages}</ul>
            </div>
            <SendMsgForm
                onAddNewMsg={onAddNewMsg}
                activeConversation={activeConversation}
            />
        </div>
    );
};

export default ChatActive;
