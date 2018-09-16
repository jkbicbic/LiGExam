import React from 'react';
import './navbar.css'
import Logo from '../../resources/img/logo.png'

const NavBar = () =>{
    return(
        <nav id="top" className="navbar">
            <img className="navbar__logo" src={Logo} alt="logo"/>
        </nav>
    )
}

export default NavBar