import { useContext } from 'react'
import ProductsCompnent from '../../Components/products/Products-Component';
import { productsContext } from '../../context/products-context'
//import SHOP_DATA from '../../shop-data.json' 
import './Shop-styling.scss'

export const Shop = () =>{
    const { products } = useContext(productsContext);
    console.log(products)
    
    return(
        <div className='shop-container'>
             {products.map(product => 
             <ProductsCompnent key = {product.id} product = {product}/>

            )}
            
            
        </div>
    )
}