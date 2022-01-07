import React from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import "./Register.css";

const Registration = () => {
    const {handleRegisterNewUser} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  const onSubmit = submitData =>{
    //   console.log(submitData);
      if (submitData.userPass1 === submitData.userPass2) {
              handleRegisterNewUser(submitData?.userEmail, submitData?.userPass1, submitData?.userName, navigate);
      }
      else{
          alert('Password not matched.');
          return ;
      }
  }
    return (
        <div className="registration">
             <Header />
                <div className="container my-5">
                <Row xs={1} md={1} lg={2}>
                    <Col  >
                        {/* <h1>Registration here</h1> */}
            
                        <Container className="form py-3" >
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <h2 className='pt-2'>REGISTER FORM</h2>
                           <hr className='w-50 mx-auto border border-2 border-dark' />
                                <Form.Group className="mb-3" controlId="formGroupName">
                                    <Form.Label className="form-label">Your Full Name</Form.Label>
                                    <input  type="text" placeholder="Full Name"  {...register("userName", {})} className="form-input" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label className="form-label">Email address</Form.Label>
                                    <input type="email" placeholder="Email" {...register("userEmail", {})} className="form-input" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label className="form-label">Enter password</Form.Label>
                                    <input type="password" placeholder="Password" {...register("userPass1", {})} className="form-input" />
                                </Form.Group>


                                <Form.Group className="mb-4" controlId="formGroupPassword">
                                    <Form.Label className="form-label">re-type Password</Form.Label>
                                    <input type="password" placeholder="Re-Enter Password" {...register("userPass2", {})} className="form-input" />
                                </Form.Group>
                                <input type="submit" className="register-submit" />
                                <br /> <br />
                                <h4>already registerd?Back to</h4>
                                <Link className="login-text" to="/login"> <h5>LOGIN</h5> </Link>
                            </form>
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