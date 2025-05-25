import { Container, Nav, Navbar, Button, Col, Row } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaAmazonPay, FaHome, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

const FinalNavbar = ({ isCartOpen, setIsCartOpen }) => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const { logout, isLoggedIn } = useContext(AuthContext);
  const cartOpenHandelar = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow fw-bold"
      variant="light"
      sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          STORE
        </Navbar.Brand>
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

          <Navbar.Text className="mx-2">
            {isLoggedIn && (
              <Nav.Link as={Link} to="/profile">
                <Button>
                  <FaUserCircle />
                </Button>
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Button variant="warning" onClick={cartOpenHandelar}>
                Cart <span className="">{totalQuantity}</span>
              </Button>
            )}
            <Button variant="outline-dark" onClick={()=>logout()}>
              {isLoggedIn ? "Logout" : "Login"}
            </Button>
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FinalNavbar;
