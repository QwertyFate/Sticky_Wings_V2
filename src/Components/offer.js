import React from "react";
import { motion } from "framer-motion";
import "./offer.css"
import WingsImage from "./pics/Offer/Wings.png";
import PastaImage from "./pics/Offer/Pasta.png";
import StickyImage from "./pics/Offer/Sticky Bites.png";
import WaffleImage from "./pics/Offer/Waffles.png";
import AppetizerImage from "./pics/Offer/Appetizers2.png";
import DrinksImage from "./pics/Offer/Drinks and Desserts.png";
import GroupImage from "./pics/Offer/Group (2).png";
import SpecialMenuImage from "./pics/Offer/Special Menu.png"

const WhatweOffer = () => {
    return(
        <motion.div className="offerContainer">
            <motion.h1 className="offerHead">OUR FOOD</motion.h1>
            <motion.ul className="offerFirstCol">
                <div className="insideContainer">
                    <motion.li className="card"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.9}}>
                        <motion.img className="offerCardImgWings" src={WingsImage}/>
                        <motion.h3 className="offerCardTitle">Chicken Wings</motion.h3>
                    </motion.li>
                    <motion.li className="card"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.9}}>
                        <motion.img className="offerCardImg" src={PastaImage}/>
                        <motion.h3 className="offerCardTitle">Pastas</motion.h3>
                    </motion.li>
                </div>
                <div className="insideContainer">
                    <motion.li className="card"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.9}}>
                        <motion.img className="offerCardImg" src={SpecialMenuImage}/>
                        <motion.h3 className="offerCardTitle">Special Menu</motion.h3>
                    </motion.li>
                    <motion.li className="card"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.9}}>
                        <motion.img className="offerCardImg" src={WaffleImage}/>
                        <motion.h3 className="offerCardTitle">Waffles</motion.h3>
                    </motion.li>
                </div>
            </motion.ul>
            <motion.ul className="offerFirstCol">
                <div className="insideContainer">
                    <motion.li className="card"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.9}}>
                        <motion.img className="offerCardImg" src={AppetizerImage}/>
                        <motion.h3 className="offerCardTitle">Appetizers</motion.h3>
                    </motion.li>
                    <motion.li className="card"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.9}}>
                        <motion.img className="offerCardImg" src={StickyImage}/>
                        <motion.h3 className="offerCardTitle">Sticky Bites</motion.h3>
                    </motion.li>
                </div>
                <div className="insideContainer">
                    <motion.li className="card"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.9}}>
                        <motion.img className="offerCardImgDrinks" src={DrinksImage}/>
                        <motion.h3 className="offerCardTitle">Drinks and Desserts</motion.h3>
                    </motion.li>
                    <motion.li className="card"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.9}}>
                        <motion.img className="offerCardImg" src={GroupImage}/>
                        <motion.h3 className="offerCardTitle">Party Boxes</motion.h3>
                    </motion.li>
                </div>
                </motion.ul>
            </motion.div>
    );
};

export default WhatweOffer;