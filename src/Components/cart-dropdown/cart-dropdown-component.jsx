import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { CartContext } from '../../context/cart-context'
import Button from '../button/button-component'
import CartItem from '../cart-item/cart-item-component'
import Checkout from '../Checkout/Checkout-component'
import './cart-dropdown-styles.scss'

const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
               {cartItems.map((item)=><CartItem key={item.id} items = {item}/>)}

            </div>
            <Link to="checkout">
            <Button >CHECKOUT</Button>
            </Link>
        </div>
    )
}

export default CartDropdown;