import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import "./Register.css";

const Registration = () => {
    return (
        <div className="registration">
             <Header />
                <div className="container my-5">
                <Row xs={1} md={1} lg={2}>
                    <Col  >
                        {/* <h1>Registration here</h1> */}
            
                        <Container className="form py-3" >
                           <Form >
                           <h2 className='pt-2'>REGISTER FORM</h2>
                           <hr className='w-50 mx-auto border border-2 border-dark' />
                                <Form.Group className="mb-3" controlId="formGroupName">
                                    <Form.Label className="form-label">Your Full Name</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="full name" className="form-input" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label className="form-label">Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter email" className="form-input" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label className="form-label">Enter password</Form.Label>
                                    <Form.Control name="password" type="password"  placeholder="Password" className="form-input" />
                                </Form.Group>


                                <Form.Group className="mb-4" controlId="formGroupPassword">
                                    <Form.Label className="form-label">re-type Password</Form.Label>
                                    <Form.Control name="password2" type="password"  placeholder="re-type Password" className="form-input" />
                                </Form.Group>
                                <Button size="lg" className="register-submit" type="submit">
                                    Submit
                                </Button>
                                <br /> <br />
                                <h4>already registerd?Back to</h4>
                                <Link className="login-text" to="/login"> <h5>LOGIN</h5> </Link>
                            </Form>
                        </Container> 


                    </Col>
                    <Col>
                        <Image fluid src="https://i.ibb.co/LkLzp6m/New-entries-pana-1.png" alt="" />
                    </Col>
                </Row>
                </div>
        </div>
    );
};

export default Registration;