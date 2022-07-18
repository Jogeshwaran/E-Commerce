import { Outlet } from 'react-router-dom';
import CardMainContainer from '../../Components/Card-MainContainer/Card-MainContainer-components';

const Home = () =>{
          return( 
            <div>
                <Outlet />
            <CardMainContainer />
            </div>
          )
    
}

export default Home;