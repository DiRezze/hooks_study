import React, { useEffect, useState } from "react";
import reactLogo from '../assets/react.svg';
import './styles/navbar.css'

const Navbar = () => {
    const [width, setWidth] = useState(1000);
    
    useEffect(()=>{

        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return ()=> {
            window.removeEventListener('resize', handleResize)

        }
    }, []);
    return(
        <nav className="nav-bar">
            <div className="brand-container">
                <a href="https://react.dev" target="_blank" className="brand-link">
                    <img src={reactLogo} className="logo react brand-icon" />
                </a>
            </div>
            {
                width<=400 ?
                null : 
                <ul className="links-list">
                    <li>Introdução</li>
                    <li>useState</li>
                    <li>useReducer</li>
                    <li>useEffect</li>
                </ul>
            }
        </nav>
    );
}

export default Navbar;
