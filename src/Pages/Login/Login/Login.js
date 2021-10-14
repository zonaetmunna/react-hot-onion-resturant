import React from 'react';
import { Col, Form, Row, Image, Button, Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from "../../../images/logo2.png";
import bgImage from '../../../images/bannerbackground.png'

const Login = () => {
     const { signInWithGoogle } = useAuth()
     const history = useHistory();
     const location = useLocation()

     const redirect_url = location.state?.from || '/home';

     const handleGoogleSign = () => {
          signInWithGoogle()
               .then(result => {
                    history.push(redirect_url);
               })
     }

     return (
          <div style={{
               backgroundImage: `url(${bgImage})`,

               backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat', width: '100vw',
               height: '100vh'
          }}>

               <Container className="w-50 mx-auto ">
                    <Row>
                         <Col sm={8} md={12}>
                              <Image className="m-4" src={logo} width="200" rounded />
                              <Form className="m-5">
                                   {/* user */}
                                   <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                                        <Col sm={10} >
                                             <Form.Control className="text-danger" type="text" placeholder="name" />
                                        </Col>
                                   </Form.Group>
                                   {/* email */}
                                   <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                                        <Col sm={10}>
                                             <Form.Control type="email" placeholder="Email" />
                                        </Col>
                                   </Form.Group>
                                   {/* password */}

                                   <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">

                                        <Col sm={10}>
                                             <Form.Control type="password" placeholder="Password" />
                                        </Col>
                                   </Form.Group>

                                   <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">

                                        <Col sm={10}>
                                             <Form.Control type="submit" placeholder="submit" />
                                        </Col>
                                   </Form.Group>


                              </Form>

                              <div>
                                   <h5>are you new user? <Link to="/signup">Sign up</Link></h5>
                                   <Button onClick={handleGoogleSign} className="btn btn-danger">Google Sign In</Button>
                              </div>
                         </Col>
                    </Row>
               </Container>




          </div >
     );
};

export default Login;