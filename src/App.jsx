import { lazy, Suspense, useContext, useState } from "react";
import FinalNavbar from "./components/FinalNavbar";
import { Navigate, Route, Routes } from "react-router-dom";
import CartModule from "./components/CartModule";
import LoginModal from "./pages/LoginModal";
import { AuthContext } from "./context/auth-context";
import NotFoundPage from "./pages/NotFoundPage";
import { Spinner } from "react-bootstrap";


const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Store = lazy(() => import("./pages/Store"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Profilepage = lazy(() => import("./pages/Profilepage"));

function App() {
  const [show, setShow] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <FinalNavbar show={show} setShow={setShow} />
      <CartModule show={show} setShow={setShow} />


      <Suspense fallback={<p className="text-center"><Spinner animation="border"/></p>}>
        <Routes>
          <Route path="/login" element={<LoginModal />} />
          <Route
            path="/"
            element={
               <Home />
            }
          />
          <Route
            path="/store"
            element={
              isLoggedIn ? <Store /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/about"
            element={
              isLoggedIn ? <About /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/contact"
            element={
              isLoggedIn ? <ContactUs /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/profile"
            element={
              isLoggedIn ? <Profilepage /> : <Navigate to="/login" replace />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

