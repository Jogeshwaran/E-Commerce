import { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import CheckoutItem from "../checkout-item/checkout-item-component";
import './Checkout-styles.scss'


const Checkout = () =>{
    const {cartItems,setCartItems,totalPrice} = useContext(CartContext);
    
    const onClickHandler =(id)=>{
        const newCartItems = cartItems.filter((item)=>item.id !== id);
        setCartItems(newCartItems)


    }

    
   
    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                <span>Description</span>
                </div>
                <div className="header-block">
                <span>Quantity</span>
                </div>
                <div className="header-block">
                <span>Price</span>
                </div>
                <div className="header-block">
                <span>Remove</span>
                </div>
            </div>
           {cartItems.map((item) =>(
                <CheckoutItem key = {item.id} cartItem = {item} onclick = {() => onClickHandler(item.id)}/>
           ))}
           <span>Total : ₹ {totalPrice}</span>

        </div>
    )
}

export default Checkout;