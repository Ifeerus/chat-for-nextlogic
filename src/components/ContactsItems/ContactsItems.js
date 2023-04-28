import ContactsItem from "../ContactsItem/ContactsItem";

import "./ContactsItems.css";

const ContactsItems = ({ data, activeElement, onActiveSelect }) => {
    const elements = data.map((item) => {
        const { id } = item;
        const { ...itemProps } = item;
        return (
            <ContactsItem
                key={id}
                activeElement={activeElement}
                onActiveSelect={onActiveSelect}
                {...itemProps}
            />
        );
    });

    return <ul className='contact-items'>{elements}</ul>;
};

export default ContactsItems;
