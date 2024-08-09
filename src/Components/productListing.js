import React from "react";
import "./productListing.css"
import TestImg from "./pics/Menu png/Wings/Classic/Aloha_Teriyaki.png"
import { motion } from "framer-motion";

const ProductListing = (props) => {
    console.log(props)
    return(
        <motion.div className="productCardContainer"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.8}}>
            <img className="productCardImg" src={props.image}/>
            <div className="productCardNameContainer">
            <h3 className="productCardName">{props.name}</h3>
            </div>
        </motion.div>
    )
};

export default ProductListing;