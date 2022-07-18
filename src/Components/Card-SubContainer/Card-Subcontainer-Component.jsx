import { useNavigate } from 'react-router-dom';
import './Card-Subcontainer-styling.scss';
const CardSubContaiener = ({category}) =>{
//In order to use the route we can either transform the div to link and pass the route to {to =""}
// or we could use the useNavigate hook 

  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(category.route)
    return(
        <div className="Card-SubContainer" onClick={onNavigateHandler}>
       <div className='background-image' style={{backgroundImage : `url(${category.imageUrl})`}} /> 
       <div className="Product-SpecificContainer" >
         <h2 >{category.title}</h2>
         <p>shop Now</p>
       </div>
       </div>
    )
}

export default CardSubContaiener;