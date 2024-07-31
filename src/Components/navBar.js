import React, { useState } from "react";
import "./navbar.css"
import logoPic from "../Components/pics/sticky_wings.png"
import { Link, Outlet } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars, faX} from '@fortawesome/free-solid-svg-icons'




const NavBar = () => {

    const [buttonChange, setButtonChange] = useState(false);

    const Changebutton = () => {
        setButtonChange(!buttonChange);
    }

    return (
        <div className="NavBar">
    <nav className="navigationBar">
        <div className="Menu">
        <Link to="/"> <img className="logoPic" src={logoPic} /> </Link>
            <div>
                <ul className="MenuList">
                <Link className="MenuListItem" to="/"><li >Home</li></Link>
                <Link className="MenuListItem" to="/Menu"><li >Menu</li></Link>
                    <li className="MenuListItem">Delivery</li>
                    
                </ul>
            </div>
            <button className="burgerBtn" onClick={Changebutton}>{!buttonChange?<FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} /> }</button>
        </div>
    </nav>
    <Outlet />
    </div>
    )
};

export default NavBar;