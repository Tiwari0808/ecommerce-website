import FinalNavbar from "./components/FinalNavbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { useState } from "react";
import CartModule from "./components/CartModule";
import ContactUs from "./pages/ContactUs";
import LoginModal from "./pages/LoginModal";
import Profilepage from "./pages/Profilepage";

function App() {
  const [isCartOpen,setIsCartOpen] = useState(false);

  return (
    <>
      <FinalNavbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}></FinalNavbar>
      <LoginModal/>
      {isCartOpen && <CartModule/>}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/profile" element={<Profilepage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
