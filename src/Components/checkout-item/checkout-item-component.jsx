import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import './checkout-item-styles.scss'

const CheckoutItem = ({cartItem,onclick}) =>{
    const {addItemToCart,removeCartItem} = useContext(CartContext)

    const itemAddHandler = () =>{
        addItemToCart(cartItem)
    }

    const itemRemoveHandler = () =>{
        removeCartItem(cartItem)
    }

    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src = {cartItem.imageUrl} alt = {`${cartItem.name}`}/>
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">
                <div className='arrow' onClick={itemRemoveHandler}>
                    &#10094;
                </div>
                <span>{cartItem.quantity}</span>
                <div className='arrow' onClick={itemAddHandler}>
                &#10095;
                </div>
                </span>
            <span className="price">{cartItem.price}</span>
            <div className="remove-button" onClick={onclick}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;