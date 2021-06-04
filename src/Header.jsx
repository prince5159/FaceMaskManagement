import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <img className="header__image" src="https://cdn5.vectorstock.com/i/1000x1000/60/09/globe-earth-wearing-medical-mask-vector-30136009.jpg" />

            <div className="header__options">
                <NavLink className="options" to="/">
                    Home
                </NavLink>
                <NavLink className="options" to="/service">
                    Services
                </NavLink>
                <NavLink className="options" to="/more">
                    More
                </NavLink>
            </div>
        </div>
    )
}

export default Header;
