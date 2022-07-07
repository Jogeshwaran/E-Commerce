import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import Button from '../button/button-component'
import './Products-styling.scss'

const ProductsCompnent = ({product}) =>{
    const {addItemToCart} = useContext(CartContext)
    //const{quantity,setQuantity} = useContext(CartContext)
    const onClickHandler = () =>{
        addItemToCart(product)
       // setQuantity(quantity + 1)
        

    
    }
    const {name,price,imageUrl} = product
    return(
    <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        <Button buttonType='inverted' onClick = {onClickHandler}>Add to Cart</Button>
    </div>
    )
}

export default ProductsCompnent;