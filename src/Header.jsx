import React from "react";

const NavBar = (props) => {
    return(
            <nav>{props.body}</nav>
    )
}

const NavComponent = () => {
    const menuItems = ["Menu", "Hello", "Hi"];

    return(
        <div>
            <div><h1>Logo</h1>
            </div>
            <ul>
                {menuItems.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default NavComponent;