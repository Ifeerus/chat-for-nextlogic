import React from "react";
import "./Menu.css";

const Menu = () => {
    return (
        <div className='menu'>
            <span className='chat-logo'>Chat</span>
            <ul className='menu-list'>
                <li className='menu-item active-menu-item'>
                    <i className='uil uil-comment'></i>
                </li>
                <li className='menu-item'>
                    <i className='uil uil-folder'></i>
                </li>
                <li className='menu-item'>
                    <i className='uil uil-plus-circle'></i>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
