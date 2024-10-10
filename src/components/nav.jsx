import React from "react";
import reactLogo from '../assets/react.svg';
import './styles/navbar.css'

const Navbar = () => {
    return(
        <nav className="nav-bar">
            <div className="brand-container">
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react brand-icon" />
                </a>
            </div>
            <ul className="links-list">
                <li>Introdução</li>
                <li>useState</li>
                <li>useReducer</li>
                <li>useEffect</li>
            </ul>
        </nav>
    );
}

export default Navbar;
