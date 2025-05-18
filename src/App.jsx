import React from "react";
import { useCart } from "./context/CartContext";
import FinalNavbar from "./components/FinalNavbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";

function App() {
  const { cartItems } = useCart();
  return (
    <>
      <FinalNavbar></FinalNavbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
