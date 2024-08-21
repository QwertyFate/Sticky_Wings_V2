import React from "react";
import testPic from "./pics/GameBoy_Classic_Flavors.png"
import "./CartItem.css"

const CartItem = (props) => {
    return (
            <div className="perItemContainer"> 
                <div className="ItemContainerLeft">
                    <img className="ItemPic" src={props.image} />
                    <h3 className="ItemName">{props.name}</h3>
                </div>
                <div className="ItemContainerRight">
                    <h3 className="ItemName">{props.price}</h3>
                    <h3 className="ItemName">{props.quantity}</h3>
                    <h3 className="ItemName">{props.price*props.quantity}</h3>
                </div>
            </div>
    )
}

export default CartItem;