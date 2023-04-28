import ChatActive from "../ChatActive/ChatActive";
import ChatEmpty from "../ChatEmpty/ChatEmpty";

const Chat = ({ dataUsers, activeElement, dataConversations, onAddNewMsg }) => {
    const activeUser = dataUsers.filter((item) => {
        return item.id === activeElement;
    });

    const activeConversation = dataConversations.filter((item) => {
        return item.participants[0] === activeElement;
    });

    if (activeUser.length !== 0) {
        return (
            <ChatActive
                activeElement={activeUser[0]}
                activeConversation={activeConversation}
                onAddNewMsg={onAddNewMsg}
            />
        );
    } else {
        return <ChatEmpty />;
    }
};

export default Chat;
