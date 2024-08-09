import React, { useEffect, useState } from "react";
import LandingImage from "../Components/pics/Sticky_Wings_Landing_Page_2_Version_3.png";
import LandingImage2 from "../Components/pics/Sticky_Wings_Cold_Brew_Landing_Page_for_web.png";
import BlockImage from "./pics/block.png";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import './carousel.css'
import { motion, useScroll } from "framer-motion";
import LandingImageMobile from "../Components/pics/Sticky_Wings_Landing_Page_2_Mobile.png"
import LandingImageMobile2 from "../Components/pics/Sticky_Wings_Cold_Brew_Landing_Page_Mobile.png"


  const CarouselSection = () => {


    const images = {
      desktopImage1: (LandingImage),
      desktopImage2: (LandingImage2),
      MobileImage: (LandingImageMobile),
      MobileImage2: (LandingImageMobile2)
    };

    const [imageSrc, setImageSrc] = useState('');
    const [isImageTwo, setIsImageTwo] = useState('');


    const updateImageSrc = () => {
      const width = window.innerWidth;
      if(width <= 980){
        setImageSrc(images.MobileImage);
        setIsImageTwo(images.MobileImage2);
      }
      else{
        setImageSrc(images.desktopImage1);
        setIsImageTwo(images.desktopImage2);
      };
      console.log(width);
    }

    useEffect(() => {
      updateImageSrc();
        window.addEventListener('resize', updateImageSrc);
        return () => {
          window.removeEventListener("resize", updateImageSrc);
        } ;
    },[])
    
    console.log(imageSrc);


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
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
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
            <div><Link to="/Delivery"><img className="LandingPageImg" src={imageSrc} /></Link></div>
            <div><img className="LandingPageImg2" src={isImageTwo} /></div>
        </Carousel>
        {/* <div className="BlockImg"><img src={BlockImage}/></div> */}
        </motion.div>
      );
  };

  export default CarouselSection;