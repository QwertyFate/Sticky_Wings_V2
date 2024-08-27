import React, { useEffect, useState } from "react";
import "./navbar.css"
import logoPic from "../Components/pics/sticky_wings.png"
import { Link, Outlet } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars, faX} from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence} from "framer-motion";
import CartTab from "./CartTab";





const DesktopNavBar = ({buttonChange, Changebutton, showcart}) => {
   

    return(
        <motion.nav className="navigationBar">
            <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration:2, type: 'spring', stiffness: 300, damping: 30 }} className="Menu">
                <Link to="/"> <img className="logoPic" src={logoPic} /> </Link>
                    <div>
                        <ul className="MenuList">
                        <Link className="MenuListItem" to="/"><motion.li whileHover={{scale: 1.2}} transition={{duration:0.2}} >Home</motion.li></Link>
                        <Link className="MenuListItem" to="/Delivery/Menu"><motion.li whileHover={{scale: 1.2}} transition={{duration:0.2}}>Menu</motion.li></Link>
                        <div className="MenuListItem" onClick={showcart}> <motion.li whileHover={{scale: 1.2}} transition={{duration:0.2}}>View Cart</motion.li></div>
                            
                        </ul>
                    </div>
                    <button className="burgerBtn" onClick={Changebutton}>{!buttonChange?<FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} /> }</button>
            </motion.div>
        </motion.nav>
    );
};

const MobileNavBar = ({buttonChange,MobileMenuClose, showcart }) => {
    return(
        <AnimatePresence>
            <motion.nav className="mobileNavBar"
             initial={{ opacity: 0}}
             animate={{ opacity: 1}}
             exit={{ opacity: 0, y: -50 }}
             transition={{stiffness: 300, damping: 100, duration: 1,}}>
                <div className="MobileMenu">
                    <ul className="MobileNavList">
                        <Link to="/" onClick={MobileMenuClose} className="MobileNavListItem"><motion.li whileHover={{scale: 1.2}} transition={{duration:0.2}}>Home</motion.li></Link>
                        <Link to="/Delivery/Menu" onClick={MobileMenuClose} className="MobileNavListItem"><motion.li whileHover={{scale: 1.2}} transition={{duration:0.2}}>Menu</motion.li></Link>
                        <div onClick={()=> {MobileMenuClose(); showcart()}} className="MobileNavListItem"><motion.li whileHover={{scale: 1.2}} transition={{duration:0.2}}>View Cart</motion.li></div>
                    </ul>
                </div>
            </motion.nav>
        </AnimatePresence>
    );
};



const NavBar = () => {
    const [showCart, setShowCart] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <=900)
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const changeShowCart = () => {
        setShowCart(!showCart);
    }
    const [buttonChange, setButtonChange] = useState(false);
    const Changebutton = () => {
    setButtonChange(!buttonChange);
    }

    const MobileMenuClose = () => {
        setButtonChange(!buttonChange);
    }
   
    return (
    <div className="NavBar">
        <DesktopNavBar Changebutton={Changebutton} buttonChange={buttonChange} showcart={changeShowCart}/>
        {isMobile && buttonChange? <MobileNavBar buttonChange={buttonChange} MobileMenuClose={MobileMenuClose} showcart={changeShowCart} /> : null}
        <Outlet />
        {showCart? <CartTab  showCart= {() => setShowCart() } /> : null}
    </div>
    )
};

export default NavBar;