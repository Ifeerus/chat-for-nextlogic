import { useState, useEffect } from "react";

import "./ContactsItem.css";

const ContactsItem = ({
    id,
    name,
    avatar,
    status,
    onActiveSelect,
    activeElement,
}) => {
    const [isOnline, setOnline] = useState(false);

    useEffect(() => {
        if (status === "online") {
            setOnline(true);
        } else {
            setOnline(false);
        }
    }, [status, isOnline]);

    const isActive = activeElement === id;
    const clazz = isActive ? "user active" : "user";

    return (
        <li className={clazz} onClick={() => onActiveSelect(id)}>
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
        </li>
    );
};

export default ContactsItem;
