import React from "react";
import { Link } from "react-router-dom";
import "./DeliveryStart.css"

const DeliveryStart = () => {
    return (
        <Link to={"/Delivery/Menu#ricebowls"} className="hello"><h1>hi</h1></Link>
    );
};

export default DeliveryStart;