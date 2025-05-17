import React from "react";
import { useCart } from "./context/CartContext";
import FinalNavbar from "./components/FinalNavbar";
import Products from "./components/Products";


function App() {
  const {cartItems} = useCart();
  return (
    <>
     <FinalNavbar></FinalNavbar>
     <Products></Products>
    </>
  );
}

export default App;
