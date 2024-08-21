import React from "react";
import "./CartTab.css"
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import axios from "axios";



const CartTab = () => {
    let total = 0
    const cartData = useSelector(store => store.cart.items);

    total = cartData.reduce((acc, item) => 
        acc + (item.price * item.quantity), 0)


    const addtoPayment = () => {

        const dataToSend = {
            item :  cartData.map(item => ({
                    name: item.ItemName,
                    price: item.price,
                    quantity: item.quantity,
        })),        totalBill: total
        }
        axios.post('http://127.0.0.1:5000/', dataToSend).then(Response => {
            console.log("response:", Response.data);
            alert('Data sent Successfully')
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending data.');
        });
    }

    return (
        <div className="CartTabContainer">
            <h2 className="CheckOutTitle">My Cart</h2>
            <div className="ItemsContainer" >
            <div className="perItemContainer"> 
                <div className="ItemContainerLeft">
                    <h3 className="ItemName1"> Description</h3>
                    <h3 className="ItemName"> Item Name</h3>
                </div>
                <div className="ItemContainerRight">
                    <h3 className="ItemName">Price</h3>
                    <h3 className="ItemName">Quantity</h3>
                    <h3 className="ItemName">Total</h3>
                </div>
            </div>
            {cartData.map((item, key) => (
        <CartItem name={item.ItemName} key={key} price={item.price} quantity={item.quantity} image={item.picture}/>
    ))};
                
            </div>
            <h2> Total Bill: {total}</h2>
            <button onClick={addtoPayment}>Payment</button>
        </div>
    )
}

export default CartTab;