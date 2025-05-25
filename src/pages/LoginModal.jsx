import React, { useContext, useRef, useState} from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import "./LoginModal.css";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";


const LoginModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { isLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url;

    setisLoading(true);
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4gCvsRcLJZUYeJY9-HgmIoIMzWguTd68";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4gCvsRcLJZUYeJY9-HgmIoIMzWguTd68";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setisLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((res) => {
            let errMsg = res.error.message;
            alert(errMsg);
            throw new Error(errMsg);
          });
        }
      })
      .then((res) => {
        login(res.idToken);
        navigate('/',{replace:true})
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>{isLogin ? "Login" : "Sign Up"}</Card.Title>
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    ref={emailInputRef}
                    required></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Your Password"
                    ref={passwordInputRef}
                    required></Form.Control>
                </Form.Group>
                <div className="login-btns">
                  {!isLoading && (
                    <Button variant="primary" type="submit" className="">
                      {isLogin ? "Login" : "Create Account"}
                    </Button>
                  )}
                  {isLoading && (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  )}
                  <Button
                    variant="secondary"
                    type="button"
                    className=""
                    onClick={() => {
                      setIsLogin((prev) => !prev);
                    }}>
                    {isLogin
                      ? "Create new account"
                      : "Login with existing account"}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginModal;
