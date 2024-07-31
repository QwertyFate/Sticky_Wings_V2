import React from "react";
import LandingImage from "../Components/pics/Sticky_Wings_Landing_Page_2_Version_3.png";
import LandingImage2 from "../Components/pics/Sticky_Wings_Cold_Brew_Landing_Page_for_web.png";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import './carousel.css'




  const CarouselSection = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return(
        <Carousel 
        arrows={false}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        focusOnSelect={true}
        className="ImgContainer">
            <div><Link to="/Menu"><img className="LandingPageImg" src={LandingImage} /></Link></div>
            <div><img className="LandingPageImg2" src={LandingImage2} /></div>
        </Carousel>
      );
  };

  export default CarouselSection;