import React, { useState } from "react";
import "./productListingSearch.css"
import ProductListing from "./productListing";
import Carousel from "react-multi-carousel";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1920, min: 1300 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 1299, min: 1200 },
      items: 5
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


const SearchButtons = ({ data, isActive }) => {



    const cardSearch = data.map((item, key) => (
        <ProductListing name={item.name} image={item.image} key={key} slug={item.slug} />
     ));



    return (
      <div className="searchContainer">
        <Carousel
        responsive={responsive} 
        className="carouselSearch"
        itemClass="itemPaddingCarouselSearch">
        {isActive ? cardSearch : <div/>}
        </Carousel>
       </div>
    )
};

export default SearchButtons