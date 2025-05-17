import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { useCart } from '../context/CartContext';

const FinalNavbar = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Navbar bg="" className="text-white fw-bold p-2 border">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#">MyShop</Navbar.Brand>
        <Nav className="d-flex gap-3">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Store</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
        <Button variant="warning">
          Cart <span className="ms-2 badge bg-dark text-white">{totalQuantity}</span>
        </Button>
      </Container>
    </Navbar>
  );
};

export default FinalNavbar;

