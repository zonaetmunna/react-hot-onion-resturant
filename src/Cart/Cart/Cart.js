import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Cart = () => {
     return (
          <div className="">
               <Container>
                    <Row>
                         <Col sm={8} md={6}>
                              <h4 className="m-5" >Edit delivery Details</h4>
                              <Row className="m-3">

                                   <Col>
                                        <Form.Control size="lg" type="text" className="bg-light" placeholder="Delivery to door" />
                                        <br />
                                        <Form.Control size="lg" type="text" className="bg-light" placeholder="107 Rd No 8" />
                                        <br />
                                        <Form.Control size="lg" type="text" className="bg-light" placeholder="Flat , suit or Floor" />
                                        <br />
                                        <Form.Control size="lg" type="text" className="bg-light" placeholder="Business name" />
                                        <br />
                                        <Form.Control size="lg" type="text" className="bg-light" placeholder="Add Delivery Instructor" />
                                        <br />
                                        <Form.Control size="lg" type="submit" className="bg-secondary" placeholder="Save and Continue" />

                                   </Col>
                              </Row>

                         </Col>
                         <Col sm={4} md={6}>
                              <Button>place order</Button>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default Cart;