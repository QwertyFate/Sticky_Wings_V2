import React from "react";
import { WingsClassicData } from "../Utils/WingsMenu";
import ProductListing from "../Components/productListing.js";
import "./DeliveryPage.css";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import testPic from "../Components/pics/GameBoy_Classic_Flavors.png";
import { WingsPremiumData } from "../Utils/WingsMenu";
import {PastaData} from "../Utils/PastaData.js";
import {RiceBowlData} from "../Utils/RiceBowlsData.js";
import {StickyBitesData} from "../Utils/StickyBitesData.js";
import {WafflesData} from "../Utils/WafflesData.js";
import {WaffwichAndPocketsData} from "../Utils/WaffwichAndPocketsData.js"
import {DrinksData} from "../Utils/Drinks.js";
import {BigOrdersData} from "../Utils/BigOrders.js";
import { Link } from "react-router-dom";

const DeliveryPage = () => {

    const testCarousel = ["hello", "hi"]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1920, min: 1300 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 1299, min: 1200 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1199, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

     const wingsclassic = WingsClassicData.map((data, key) => (
        <ProductListing name={data.name} image={data.image}/>
     ));
     const wingspremium = WingsPremiumData.map((data, key) => (
        <ProductListing name={data.name} image={data.image}/>
     ))
     const pasta = PastaData.map((data, key) => (
        <ProductListing name={data.name} image={data.image}/>
     ))
     const ricebowl = RiceBowlData.map((data, key) => (
        <ProductListing name={data.name} image={data.image}/>
     ))
     const stickybites = StickyBitesData.map((data, key) => (
        <ProductListing name={data.name} image={data.image}/>
     ))
     const waffles = WafflesData.map((data, key) => (
        <ProductListing name={data.name} image={data.image}/>
     ))
     const waffwichandpockets = WaffwichAndPocketsData.map((data, key) => (
        <ProductListing name={data.name} image={data.image}/>
     ))
     const drinks = DrinksData.map((data, key) => (
        <ProductListing name={data.name} image={data.image}/>
     ))
     const bigorders = BigOrdersData.map((data, key) => (
        <ProductListing name={data.name} image={data.image}/>
     ))
     

    
    return(
            <div className="DeliverySection">
                <a href="#bigorders"><button> hello</button></a>
                <h2 className="nameTitle" id="Wings">Wings</h2>
                <Carousel
                responsive={responsive}
                containerClass="carousel"
                itemClass="carouselItem">
                    {wingsclassic}
                    {wingspremium}
                </Carousel>
                <h2 className="nameTitle">Pasta</h2>
                <Carousel
                responsive={responsive}
                containerClass="carousel"
                itemClass="carouselItem">
                    {pasta}
                </Carousel>
                <h2 className="nameTitle">Rice Bowls</h2>
                <Carousel
                responsive={responsive}
                containerClass="carousel"
                itemClass="carouselItem">
                    {ricebowl}
                </Carousel>
                <h2 className="nameTitle">StickyBites</h2>
                <Carousel
                responsive={responsive}
                containerClass="carousel"
                itemClass="carouselItem">
                    {stickybites}
                </Carousel>
                <h2 className="nameTitle">Waffles and Waffwich</h2>
                <Carousel
                responsive={responsive}
                containerClass="carousel"
                itemClass="carouselItem">
                    {waffles}
                    {waffwichandpockets}
                </Carousel>
                <h2 className="nameTitle">Beverages</h2>
                <Carousel
                responsive={responsive}
                containerClass="carousel"
                itemClass="carouselItem">
                    {drinks}
                </Carousel>
                <h2 className="nameTitle" id="bigorders">Big Orders</h2>
                <Carousel
                responsive={responsive}
                containerClass="carousel"
                itemClass="carouselItem">
                    {bigorders}
                </Carousel>
                
            </div>

       
    )
    
};

export default DeliveryPage;