import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DeliveryStart.css"
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { AuthContext } from "../Auth/Auth";
import { useNavigate } from "react-router-dom";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const DeliveryStart = () => {
  const Navigate = useNavigate();
  const {login} = useContext(AuthContext);


  useEffect(() => {
    const loadGoogleSDK = () => {
      const script = document.createElement('script');
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadGoogleSDK();
  }, []);

  const successResponse = (response) => {
    const token = response.credential;

    axios.post('https://sticky-wings-v2-back.vercel.app/api/authGoogle', {token})
    .then((res) => {
      console.log("user authenticated:", res.data)
      login(res.data.token);
      Navigate('/CheckOut')
    })
    .catch((err) => console.error(err)) 
  }

  const failedResponse = () => {
    console.log("failed");
  }

    return (
      <div className="LoginPage">
        <div className="GoogleContainer">
          <h1 className="LoginTitle">Please Login </h1>
          <GoogleLogin
          onSuccess={successResponse}
          onError={failedResponse}
          useOneTap={!isMobile}
          uxMode={isMobile ? 'redirect' : 'popup'}
          />
          </div>
        </div>
    );
};

export default DeliveryStart;