import { Link } from "react-router-dom";
import ProductsCompnent from "../products/Products-Component";
import './category-preview-styles.scss'


const CategoryPreview = ({title,products}) =>{
    return(
        <div className="category-preview-container">
             <h2>
      <Link className='title' to={title}>{title.toUpperCase()}</Link>
    </h2>
            <div className="preview">
                {products.slice(0,4).map((product) => (<ProductsCompnent key={product.id} product = {product}/>))}
            </div>
        </div>
    )
}

export default CategoryPreview;