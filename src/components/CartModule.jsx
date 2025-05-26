import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Modal, ListGroup, Row, Col } from "react-bootstrap";
import './CartModule.css'

const CartModule = ({ show, setShow }) => {
  const { cartItems, removeFromCart,increaseCartItem } = useContext(CartContext);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Modal show={show} onHide={() => setShow(false)} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row className="align-items-center">
                  <Col xs={3}>
                    <img src={item.imageUrl} alt={item.title} width="80%" height="80%" className="rounded" />
                  </Col>
                  <Col xs={6}>
                    <p className="mb-0" >Price: ₹{item.price}</p>
                    <p className="mb-0 mb-0 ">Quantity: {item.quantity}</p>
                    <p className="mb-0 fw-bold">Total: ₹{item.price * item.quantity}</p>
                  </Col>
                  <Col xs={3} className="text-end">
                    <Button variant="outline-danger" size="sm" className="" onClick={() => removeFromCart(item.id)}>
                      -
                    </Button>
                    <Button variant="outline-success" size="sm" onClick={() => increaseCartItem(item.id)}>
                      +
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer id="modal-footer">
        <h4 className="me-auto">Grand Total: ₹{totalAmount}</h4>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModule;