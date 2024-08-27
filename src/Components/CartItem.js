import React from "react";
import testPic from "./pics/GameBoy_Classic_Flavors.png"
import "./CartItem.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {removeFromCart} from "../store/cart";

const CartItem = (props) => {

    const dispatch = useDispatch();

    const handleRemoveCart = () => {
        dispatch(removeFromCart({
            ItemName: props.name
        }))
    }


    return (
            <div className="perItemContainer"> 
                {/* <div className="ItemContainerLeft"> */}
                    {/* <img className="ItemPic" src={props.image} /> */}
                    <div className="NameAndQty">
                    <h3 className="ItemName">x{props.quantity}</h3>
                    <h3 className="ItemName">{props.name}</h3>
                    </div>
                {/* </div> */}
                {/* <div className="ItemContainerRight"> */}
                    
                    <h3 className="ItemName">{props.price*props.quantity}</h3>
                    <FontAwesomeIcon onClick={handleRemoveCart} className="TrashIcon" icon={faTrash} />
                {/* </div> */}
            </div>
    )
}

export default CartItem;