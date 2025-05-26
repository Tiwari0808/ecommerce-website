import {
  Container,
  Nav,
  Navbar,
  Button,
  Col,
  Row,
  Badge,
} from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaReact, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { FaAirbnb, FaCartPlus } from "react-icons/fa6";
import "./Finalnavbar.css";

const FinalNavbar = ({ show,setShow}) => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const { logout, isLoggedIn } = useContext(AuthContext);
  const cartOpenHandelar = () => {
    setShow(!show);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow fw-bold"
      variant="light"
      sticky="top">
      <Container className="cont">
        <Navbar.Brand as={Link} to="/">
          <FaReact id="brand-svg"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            {isLoggedIn && (
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            )}

            {isLoggedIn && (
              <Nav.Link as={Link} to="/store">
                Store
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
            )}
            <Navbar.Text className="mx-2" id="other">
              {isLoggedIn && (
                <Nav.Link as={Link} to="/profile">
                  <Button variant="outline-dark">
                    <FaUserCircle />
                  </Button>
                </Nav.Link>
              )}
                {isLoggedIn && (
                  <Button variant="outline-dark" id="cart-btn" onClick={cartOpenHandelar}>
                    <FaCartPlus className="cart-svg" /> <Badge bg="dark" className="cart-count">{totalQuantity}</Badge>
                  </Button>
                )}

              <Button variant="outline-dark" onClick={() => logout()}>
                {isLoggedIn ? "Logout" : "Login"}
              </Button>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FinalNavbar;
