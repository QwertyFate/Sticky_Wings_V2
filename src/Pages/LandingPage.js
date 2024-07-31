import React from "react";
import "./LandingPage.css";
import { Link } from 'react-router-dom';
import LocationSection from "../Components/location.js";
import LandingSelection from "../Components/landingSelection.js";
import CarouselSection from "../Components/carousel.js";
import Footer from "../Components/footer.js";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";



const LandingPage = () => {
    return(
      <ScrollContainer>
          <CarouselSection />
          <ScrollPage>
          <div className="Border"></div>

          
          <LandingSelection />
          </ScrollPage>
          <ScrollPage>
        <Animator animation={MoveIn(-50, 0)}>
      <LocationSection />
      </Animator>
      <Footer />
      </ScrollPage>
      </ScrollContainer>
    ) 
};

export default LandingPage;