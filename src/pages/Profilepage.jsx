import { useContext, useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { AuthContext } from "../context/auth-context";

const Profilepage = () => {
  const newPasswordRef = useRef();
  const {token} = useContext(AuthContext);
  const loginHandler = (e) => {
    e.preventDefault();
    const enteredNewPassword = newPasswordRef.current.value;
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD4gCvsRcLJZUYeJY9-HgmIoIMzWguTd68'
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
         idToken:token,
         password:enteredNewPassword,
         returnSecureToken:false
        }),
        headers: { "Content-Type": "application/json" }
    }).then((res)=>{
        console.log(res.data);
    })
  };
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Reset Password</Card.Title>
              <Form onSubmit={loginHandler}>
                <Form.Group controlId="changePassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    placeholder="Enter your new Password"
                    type="password"
                    ref={newPasswordRef}
                    required
                  />
                </Form.Group>
                <Button type="submit" className="mt-2">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profilepage;
