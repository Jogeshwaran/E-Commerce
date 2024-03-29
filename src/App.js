import {  Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/home.componet.routes";

import Navbar from "./Components/Navigation/Navigation-component";
import Authentication from "./Routes/Home/authentication/authentication";
import { Shop } from "./Routes/Shop/Shop-component";
import Checkout from "./Components/Checkout/Checkout-component";
import Carousel from "./Components/CarouselComponent/Carousel";
import CarouselComponent from "./Components/CarouselComponent/Carousel";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";


// const Shop = () => {
//   return <h1>THis is the shop page</h1>
// }

 const App = () =>{
  // nested Routes 
  // shop/* => means anything doesnt matter whatever the parameter after the shop
  return(
   
    <Routes>
      <Route path = '/' element = {<Navbar/> }>
        <Route index element = {[<CarouselComponent />,<Home />]}/>
        <Route path="AboutUs" element = {<AboutUs />}/>
        <Route path="shop/*" element = {<Shop />} />
        <Route path="ContactUs" element = {<ContactUs />}/>
        <Route path="auth" element = {<Authentication/>} />
        <Route path="checkout" element = {<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
