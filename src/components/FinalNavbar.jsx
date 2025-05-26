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
import { Link, useNavigate } from "react-router-dom";
import { FaReact, FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { FaCartPlus } from "react-icons/fa6";
import "./Finalnavbar.css";

const FinalNavbar = ({ show, setShow }) => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const { logout, isLoggedIn } = useContext(AuthContext);
  const cartOpenHandelar = () => {
    setShow(!show);
  };
  const navigate = useNavigate()
  
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="shadow fw-bold"
        variant="light"
        sticky="top">
        <Container className="cont">
          <Navbar.Brand as={Link} to="/">
            <FaReact id="brand-svg" /> React
          </Navbar.Brand>
          <Button variant="outline-dark" onClick={() => isLoggedIn ? logout() : navigate('/login')}>
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
          {isLoggedIn && <Navbar.Toggle aria-controls="basic-navbar-nav" />}
          {isLoggedIn && (
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
                    <Button
                      variant="outline-dark"
                      id="cart-btn"
                      onClick={cartOpenHandelar}>
                      <FaCartPlus className="cart-svg" />{" "}
                      <Badge bg="dark" className="cart-count">
                        {totalQuantity}
                      </Badge>
                    </Button>
                  )}
                </Navbar.Text>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default FinalNavbar;
