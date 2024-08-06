import React, { useEffect, useState } from "react";
import "./landingSelection.css"
import OrderNow from "./pics/Order_Now_Banner.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import OrderNowMobile from "./pics/Order_Now_Banner_Mobile.png"

const LandingSelection = () => {

    const orderNowImages = {
        orderNowImagesDesktop: (OrderNow),
        orderNowImagesMobile: (OrderNowMobile)
    };

    const [orderNowPic, setOrderNowPic] = useState('');

    const updateOrderNowPic = () => {
        const width = window.innerWidth;
        if (width <= 980) {
            setOrderNowPic(orderNowImages.orderNowImagesMobile);
        } else {
            setOrderNowPic(orderNowImages.orderNowImagesDesktop);
        }
    };

    useEffect(() => {
        updateOrderNowPic();
        window.addEventListener('resize', updateOrderNowPic);
        return () => {
            window.removeEventListener('resize', updateOrderNowPic);
        }
    },[])

    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ease:"easeInOut", duration: 3}}
        className="OrderNowContainer">
            <img className="OrderNowPic" src={orderNowPic} />
            <Link to={"/Menu"} className="OrderNowButtonLink">
                <div className="OrderNowButtonContainer">
                    <motion.button className="OrderNowButton"
                    whileHover={{scale: 1.1}}
                    >
                        <p className="ButtonInfo">ORDER NOW!!</p>
                    </motion.button>
                </div>
            </Link>
        </motion.div>
    );
};

export default LandingSelection;