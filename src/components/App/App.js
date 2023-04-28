import { useState } from "react";

import Contacts from "../Contacts/Contacts";
import Chat from "../Chat/Chat";
import Menu from "../Menu/Menu";

import dataJson from "../../resourses/db/db.json";
import "./App.css";

function App() {
    const [dataUsers] = useState(dataJson.users);
    const [dataConversations, setDataConversations] = useState(
        dataJson.conversations
    );
    const [activeElement, setActiveElement] = useState(null);
    const [newMsgId, setNewMsgId] = useState(22);
    const [term, setTerm] = useState("");

    const onActiveSelect = (id) => {
        setActiveElement(id);
    };

    const onAddNewMsg = (id, newMsg) => {
        const activeConversation = dataConversations.filter(
            (item) => item.id === id
        )[0];

        if (activeConversation !== undefined && newMsg !== "") {
            const newItem = {
                msgID: newMsgId,
                sender: 22,
                text: newMsg,
            };
            setNewMsgId(newMsgId + 1);

            const updatedConversation = {
                id: activeConversation.id,
                participants: activeConversation.participants,
                messages: [...activeConversation.messages, newItem],
            };

            const filteredData = dataConversations.filter((item) => {
                return item.id !== id;
            });

            const updatedConversationData = [
                ...filteredData,
                updatedConversation,
            ];

            setDataConversations(updatedConversationData);
        }
    };

    const onUpdateSearch = (term) => {
        setTerm(term);
    };

    const searchContact = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return (
                item.name.toLowerCase().startsWith(term.toLowerCase()) === true
            );
        });
    };

    const visibleContactsData = searchContact(dataUsers, term);

    return (
        <div className='App'>
            <Menu />
            <Contacts
                data={visibleContactsData}
                activeElement={activeElement}
                onActiveSelect={onActiveSelect}
                onUpdateSearch={onUpdateSearch}
            />
            <Chat
                activeElement={activeElement}
                dataUsers={dataUsers}
                dataConversations={dataConversations}
                onAddNewMsg={onAddNewMsg}
            />
        </div>
    );
}

export default App;
