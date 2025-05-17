import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useCart } from "../context/CartContext";

const products = [
  {
    id : 1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id : 2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id : 3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id : 4,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];


const Products = () => {
  const {addToCart} = useCart();
  return (
    <Container>
            <Row className="mt-5">
              {products.map((item, index) => (
                <Col key={index} lg={3} md={6} sm={12} className="mb-4">
                  <Card className="text-center h-100">
                    <Card.Img
                      variant="top"
                      src={item.imageUrl}
                      alt={item.title}
                      className="p-3"
                      style={{ height: "200px", objectFit: "contain" }}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>Price: ${item.price}</Card.Text>
                      <Button variant="primary" onClick={()=>addToCart(item)}>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
  )
}

export default Products

