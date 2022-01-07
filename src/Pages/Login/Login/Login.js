import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
// import "./Login.css";

const Login = () => {
    const {handleGoogleLogin} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    // login with google 
    const loginWithGoogle = () =>{
        handleGoogleLogin(location, navigate);
    }
    return (
        <div className="registration">
             <Header />
                <div className="container my-5">
                <Row xs={1} md={1} lg={2}>
                    <Col  >
                        {/* <h1>Registration here</h1> */}
            
                        <Container className="form py-3" >
                           <Form >
                           <h2 className='pt-2'>LOG IN FORM</h2>
                           <hr className='w-50 mx-auto border border-2 border-dark' />
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label className="form-label">Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter email" className="form-input" />

                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formGroupPassword">
                                    <Form.Label className="form-label">Enter password</Form.Label>
                                    <Form.Control name="password" type="password"  placeholder="Password" className="form-input" />
                                </Form.Group>
                                <Button size="lg" className="register-submit" type="submit">
                                    Submit
                                </Button>
                                <Button  className="google-login my-3" onClick={loginWithGoogle}>Google Login</Button>
                                <h4>Not registerd?</h4>
                                <Link className="login-text" to="/register"> <h5>REGISTER</h5> </Link>
                            </Form>
                        </Container> 


                    </Col>
                    <Col>
                        <Image fluid src="https://i.ibb.co/SsLDP1Z/New-Project-7.png" alt="" />
                    </Col>
                </Row>
                </div>
        </div>
    );
};

export default Login;