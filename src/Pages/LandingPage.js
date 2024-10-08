import React from "react";
import "./LandingPage.css";
import { Link } from 'react-router-dom';
import LocationSection from "../Components/location.js";
import LandingSelection from "../Components/landingSelection.js";
import CarouselSection from "../Components/carousel.js";
import Footer from "../Components/footer.js";
import WhatweOffer from "../Components/offer.js";



const LandingPage = () => {
    return(
    <>
      <CarouselSection />
      <WhatweOffer />
      <LandingSelection />
      <LocationSection />
      <Footer />
    </>
    ) 
};

export default LandingPage;