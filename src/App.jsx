import FinalNavbar from "./components/FinalNavbar";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { useContext, useState } from "react";
import CartModule from "./components/CartModule";
import ContactUs from "./pages/ContactUs";
import LoginModal from "./pages/LoginModal";
import Profilepage from "./pages/Profilepage";
import { AuthContext } from "./context/auth-context";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <FinalNavbar
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}></FinalNavbar>
      {/* <LoginModal /> */}
      {isCartOpen && <CartModule />}
      <Routes>
        <Route path="/login" element={<LoginModal />}></Route>
        <Route
          path="/"
          element={
            isLoggedIn ? <Home /> : <Navigate to={"/login"} replace />
          }></Route>
        <Route
          path="/store"
          element={
            isLoggedIn ? <Store /> : <Navigate to={"/login"} replace />
          }></Route>
        <Route
          path="/about"
          element={
            isLoggedIn ? <About /> : <Navigate to={"/login"} replace />
          }></Route>

          <Route
          path="/contact"
          element={
            isLoggedIn ? <ContactUs/> : <Navigate to={"/login"} replace />
          }></Route>

       <Route
          path="/profile"
          element={
            isLoggedIn ? <Profilepage/> : <Navigate to={"/login"} replace />
          }></Route>

        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
