import React from "react";
import "./landingSelection.css"
import OrderNow from "./pics/Order_Now_Banner.png"
import { Link } from "react-router-dom";


const LandingSelection = () => {
    return (
        <div className="OrderNowContainer">
            <img className="OrderNowPic" src={OrderNow} />
            <Link to={"/Menu"} className="OrderNowButtonLink"><div className="OrderNowButtonContainer"><button className="OrderNowButton"><p className="ButtonInfo">ORDER NOW!!</p></button></div></Link>
        </div>
    );
};

export default LandingSelection;