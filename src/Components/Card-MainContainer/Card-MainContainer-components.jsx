import CardSubContaiener from "../Card-SubContainer/Card-Subcontainer-Component";
import './Card-MainContainer-styling.scss';
const CardMainContainer = ({categories}) =>{
    return(
        <div className="Card-MainContainer">
             {categories.map((category) => 
             <CardSubContaiener key={category.id} category = {category}/>
      )}
        </div>
    )
}

export default CardMainContainer;