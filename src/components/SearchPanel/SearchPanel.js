import { useState } from "react";

import "./SearchPanel.css";

const SearchPanel = ({ onUpdateSearch }) => {
    const [term, setTerm] = useState("");

    const onCurrentUpdate = (e) => {
        const term = e.target.value;
        setTerm(term);
        onUpdateSearch(term);
    };

    return (
        <div className='search-form'>
            <input
                className='search-input'
                type='text'
                placeholder='Search here'
                value={term}
                onChange={(event) => onCurrentUpdate(event)}
            />
            <span className='search-icon'>
                <i className='uil uil-search'></i>
            </span>
        </div>
    );
};

export default SearchPanel;
