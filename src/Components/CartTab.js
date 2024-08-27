import React from "react";
import "./CartTab.css"
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CartTab = (props) => {
    let total = 0
    const cartData = useSelector(store => store.cart.items);

    total = cartData.reduce((acc, item) => 
        acc + (item.price * item.quantity), 0)


    
    return (
        <div className="CartTabContainer">
            <div className="TitleContainer">
            <motion.div onClick={props.showCart} className="Xmark" whileHover={{scale:"1.2"}} whileTap={{scale: "0.8"}}>
            <FontAwesomeIcon icon={faLessThan} />
            </motion.div>
            <h2 className="CheckOutTitle">My Cart</h2>
           
            </div>
            <div className="ItemsContainer" >
            {/* <div className="perItemContainer"> 
                <div className="ItemContainerLeft">
                    <h3 className="ItemName"> Description</h3>
                    <h3 className="ItemName"> Item Name</h3>
                </div>
                <div className="ItemContainerRight" style={{marginRight:"100px"}}>
                    <h3 className="ItemName">Price</h3>
                    <h3 className="ItemName">Quantity</h3>
                    <h3 className="ItemName">Total</h3>
                    <h3 className="ItemName">Remove</h3>
                </div>
            </div> */}
            {cartData.map((item, key) => (
        <CartItem name={item.ItemName} key={key} price={item.price} quantity={item.quantity} image={item.picture}/>
    ))}
                
            </div>
            <div className="billSeparation">
            <h2 className="totalBill">Total:</h2>
            <h2 className="totalBill"> ₱{total}</h2>
            </div>
            <Link className="CheckOutButtonContainer" to={"/CheckOut"}>
                <motion.button className="CheckOutButton" onClick={props.showCart}
                whileTap={{scale:"0.8"}}>
                    Checkout
                </motion.button>
            </Link>
        </div>
    )
}

export default CartTab;