import React, { useContext, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./CheckOutPage.css"
import CartItem from "../Components/CartItem";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";
import MapLocateAddress from "../Components/AddressLocator";
import cart from "../store/cart";
import { motion } from "framer-motion";

const CheckOutPage = () => {
    const [addressOfUser, setAddressOfUser] = useState('');
    let Navigate = useNavigate();
    let total = 0
    const cartData = useSelector(store => store.cart.items);
    const {logout} = useContext(AuthContext);
    total = cartData.reduce((acc, item) => 
        acc + (item.price * item.quantity), 0)

    const checktokenexpiration = () => {
        const expiry = localStorage.getItem("exp")
        console.log(Date.now(),expiry*1000)
        if(expiry) {
            return Date.now() <= expiry*1000;
        }
        return true
    }
    const handleaddress = async (newaddress) => {
        setAddressOfUser(newaddress);
    }

    const addtoPayment = () => {
        console.log(checktokenexpiration());
        
        if (!checktokenexpiration()) {
            alert("'Session has expired. Please log in again.'")
            logout();
            Navigate("/delivery");
            return;
        } else if(cartData.length !== 0) {
            
            const dataToSend = {
                item :  cartData.map(item => ({
                        name: item.ItemName,
                        price: item.price,
                        quantity: item.quantity,
            })),        totalBill: total,
                        address: addressOfUser
            }
            axios.post('https://sticky-wings-v2-back.vercel.app', dataToSend).then(Response => {
                console.log("response:", Response.data);
                alert('Data sent Successfully')
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error sending data.');
            });
        } else{
            alert('add items to your cart')
            Navigate('/delivery/menu')
        }
    }



    return (
        <div className="CheckOutPage">
            <h2 className="CheckOutTitle">My Cart</h2>
            <div className="ItemsContainerCheckOut" >
            {cartData.map((item, key) => (
        <CartItem name={item.ItemName} key={key} price={item.price} quantity={item.quantity} image={item.picture}/>
    ))}
                
            </div>
            <h2 className="TotalBillCheckout"> Total: ₱{total}</h2>
            <h2>Address</h2>
            <MapLocateAddress handleaddress={handleaddress}/>
            <motion.button className="paymentBtn" onClick={addtoPayment}
            whileHover={{scale:"1.1"}}
            whileTap={{scale:"0.8"}}>Payment</motion.button>
        </div>
    )
}

export default CheckOutPage;