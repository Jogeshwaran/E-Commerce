import {  Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/home.componet.routes";

import Navbar from "./Components/Navigation/Navigation-component";
import Authentication from "./Routes/Home/authentication/authentication";

const Shop = () => {
  return <h1>THis is the shop page</h1>
}

 const App = () =>{
  return(
    <Routes>
      <Route path = '/' element = {<Navbar/>}>
        <Route index element = {<Home />}/>
        <Route path="shop" element = {<Shop />} />
        <Route path="auth" element = {<Authentication/>} />
      </Route>
    </Routes>
  )
}

export default App;
