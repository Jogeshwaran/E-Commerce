import { Outlet } from 'react-router-dom';
import CardMainContainer from '../../Components/Card-MainContainer/Card-MainContainer-components';
import CarouselComponent from '../../Components/CarouselComponent/Carousel';

const Home = () =>{
          return( 
            <div>
                <Outlet />
            <CardMainContainer />
            </div>
          )
    
}

export default Home;