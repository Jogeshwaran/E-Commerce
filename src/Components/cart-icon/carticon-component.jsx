import { useContext } from 'react'
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart-context'

import './carticon-styles.scss'



const CartIcon = ({onClick}) =>{

    // const {toggle,setToggle} = useContext(CartContext)

    // const OnclickHandler = () => setToggle(true)

    const {cartItemCount} = useContext(CartContext);
    return(
        <div className='cart-icon-container'onClick={onClick} >
            <ShoppingIcon  className = 'shopping-icon' />
            <span className='item-count'>{cartItemCount}</span>
        </div>
    )
}

export default CartIcon;