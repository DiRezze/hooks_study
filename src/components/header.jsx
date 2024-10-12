import React from "react";
import './styles/header.css';

const Header = () => {

    const handleRedirect = (url) => {
        window.location.href = url;
    };

    return(
        <header className='header-container'>
            <h1>Estudo de Hooks</h1>
            <button onClick={()=>handleRedirect("https://github.com")} className="link-btn">Repositório</button>
            <button onClick={()=>handleRedirect("https://react.dev/reference/react")} className="link-btn">Documentação do React</button>
        </header>
    )
}

export default Header;
