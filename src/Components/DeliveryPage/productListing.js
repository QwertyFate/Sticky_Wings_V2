import React from "react";
import "./productListing.css"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductListing = (props) => {
    return(
        <Link to={`/Delivery/${props.slug}`} className="LinkNames" style={{ textDecoration: 'none' }}>
        <motion.div className="productCardContainer"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.8}}>
            <img className="productCardImg" src={props.image}/>
            <div className="productCardNameContainer">
            <h3 className="productCardName">{props.name}</h3>
            </div>
        </motion.div>
        </Link>
    )
};

export default ProductListing;