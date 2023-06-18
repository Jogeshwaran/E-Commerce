import { Fragment, useContext } from 'react'
import CategoryPreview from '../../Components/category-preview/category-preview-component';
import ProductsCompnent from '../../Components/products/Products-Component';
import { CategoriesContext } from '../../context/categories-context'
//import SHOP_DATA from '../../shop-data.json' 

export const CategoriesPreview = () =>{
    const { categoryMap } = useContext(CategoriesContext);
    console.log('categoryMap',categoryMap);
    
    
    return(
        //Object.keys(categoryMap) => return array of keys, i.e hats ,men ,women
        <Fragment>
            {Object.keys(categoryMap).map((title) => {
                const products = categoryMap[title];
                return <CategoryPreview key={title} title = {title} products = {products}/>
})}

        
        </Fragment>

// {Object.keys(categoryMap).map((title) => (
//     <Fragment key={title}>
//         <h2>{title}</h2>
//         <div className='shop-container'>
//         {categoryMap[title].slice(0,4).map(product => 
//         <ProductsCompnent key = {product.id} product = {product}/>
// )}
// </div>
//         </Fragment>
// ))}

    )
}