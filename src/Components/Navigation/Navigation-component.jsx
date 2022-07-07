import { Fragment, useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { CartContext } from "../../context/cart-context";
import { userContext } from "../../context/context";
import { signUserOut } from "../../utils/firebase/Firebase-Authentication";
import CartDropdown from "../cart-dropdown/cart-dropdown-component";
import CartIcon from "../cart-icon/carticon-component";
import './Navigation-styling.scss';
const Navbar = () =>{
  const {currentUser,setCurrentUser} = useContext(userContext);
  
  const {toggle,setToggle} = useContext(CartContext)

  

  
  


  // const SignOutHandler = async() =>{
  //   const respone = await signUserOut();
  //   console.log(respone);
  //   setCurrentUser(null);
  // }
    return (

      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to = "/">
                <CrownLogo className = "logo" />
                </Link>
        
        <div className="nav-links-container">
           <Link className="nav-link" to = "Shop"> SHOP</Link>
           {currentUser ? (<span className="nav-link" onClick={signUserOut}>SIGN OUT</span>) : 
           ( <Link className="nav-link" to = "auth">SIGN IN</Link>)}
          <CartIcon onClick = {() => setToggle(!toggle)}/>

        </div>

        {toggle ? <CartDropdown/> : null } 
        </div>
      <Outlet />
      </Fragment>
    )
  };

  export default Navbar;