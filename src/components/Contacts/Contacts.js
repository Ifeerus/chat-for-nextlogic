import SearchPanel from "../SearchPanel/SearchPanel";
import ContactsItems from "../ContactsItems/ContactsItems";

import "./Contacts.css";

function Contacts({ data, activeElement, onActiveSelect, onUpdateSearch }) {
    return (
        <div className='contacts'>
            <SearchPanel onUpdateSearch={onUpdateSearch} />
            <ContactsItems
                activeElement={activeElement}
                onActiveSelect={onActiveSelect}
                data={data}
            />
        </div>
    );
}

export default Contacts;
