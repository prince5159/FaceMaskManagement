import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ServiceHeader.css";

function ServiceHeader(props) {
    return (
        <div className="serviceHeader">
        <NavLink className="sh__options" to="/">
            Home
        </NavLink>
{/* 
        <NavLink className="sh__options" to="#MASK__ON">
            Mask On
        </NavLink>

        <NavLink className="sh__options" to="#MASK__OFF">
            Mask Off
        </NavLink>
             */}
        </div>
    )
}

export default ServiceHeader;
