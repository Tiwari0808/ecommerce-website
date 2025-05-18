import React from "react";
import { useCart } from "./context/CartContext";
import FinalNavbar from "./components/FinalNavbar";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";


function App() {
  const {cartItems} = useCart();
  return (
    <>
     <FinalNavbar></FinalNavbar>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/store" element={<Store/>}></Route>
      <Route path="/about" element={<About/>}></Route>
     </Routes>
    </>
  );
}

export default App;
