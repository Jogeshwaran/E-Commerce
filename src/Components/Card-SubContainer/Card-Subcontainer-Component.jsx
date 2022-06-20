import './Card-Subcontainer-styling.scss';
const CardSubContaiener = ({category}) =>{
    return(
        <div className="Card-SubContainer">
       <div className='background-image' style={{backgroundImage : `url(${category.imageUrl})`}} /> 
       <div className="Product-SpecificContainer" >
         <h2 >{category.title}</h2>
         <p>shop Now</p>
       </div>
       </div>
    )
}

export default CardSubContaiener;