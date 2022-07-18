import { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductsCompnent from '../../Components/products/Products-Component';
import { CategoriesContext } from '../../context/categories-context';
import './category-styles.scss'

const Category = () =>{
const {category} = useParams();
const {categoryMap} = useContext(CategoriesContext)
console.log(category);

const [product,setProduct] = useState(categoryMap[category])

useEffect(()=>{
    setProduct(categoryMap[category])
},[category,categoryMap])

return(
    <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
    <div className='category-container'>
        {
            product && product.map((pd) => <ProductsCompnent key={pd.id} product = {pd}/>)
        }
    </div>
    </Fragment>
)

}
export default Category;