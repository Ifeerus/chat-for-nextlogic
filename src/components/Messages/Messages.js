import { useEffect, useState } from "react";

import "./Messages.css";

const Messages = ({ activeConversation }) => {
    const [messages, setMessages] = useState(activeConversation[0].messages);

    useEffect(() => {
        setMessages(activeConversation[0].messages);
    }, [activeConversation]);

    const elements = messages.map((item) => {
        const { msgID, sender, text } = item;

        const clazz =
            sender === 22 ? "message from-me" : "message form-contact";

        return (
            <li key={msgID} className={clazz}>
                {text}
            </li>
        );
    });
    return <>{elements}</>;
};

export default Messages;
