import React from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bgImage from '../../../images/bannerbackground.png'
import logo from '../../../images/logo2.png'

const Signup = () => {
     return (
          <div style={{
               backgroundImage: `url(${bgImage})`,

               backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat', width: '100vw',
               height: '100vh'
          }}>
               <Container className="w-50 mx-auto m-5">
                    <Row>
                         <Col sm={8} md={12}>
                              <Image className="m-4" src={logo} width="200" />
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
                                             <Form.Control type="submit" placeholder="Password" />
                                        </Col>
                                   </Form.Group>


                              </Form>

                              <div>
                                   <h5>already have account? <Link to="/login">Login</Link></h5>

                              </div>
                         </Col>
                    </Row>
               </Container>




          </div >
     );
};

export default Signup;