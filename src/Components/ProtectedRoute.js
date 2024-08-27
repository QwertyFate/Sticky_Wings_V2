import React, { Component, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";

const ProtectedRoute = ({element: Component, ...rest}) => {
    const {auth} = useContext(AuthContext);

    return(
        auth ? <Component {...rest} /> : <Navigate to="/delivery"/>
    );
}

export default ProtectedRoute;