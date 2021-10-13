import React from 'react';
import { Col, Container, FormControl, Button, Image, InputGroup, Row } from 'react-bootstrap';
import img from '../../../images/bannerbackground.png'
const Banner = () => {

     const sectionStyle = {
          backgroundImage: `url(${img})`
     };

     return (
          <div style={sectionStyle}>
               <Container fluid>
                    <Row >
                         <Col xs={12} md={12} >
                              <h1>Best food waiting for your belly</h1>
                              <InputGroup className="mt-5 mb-5 mx-auto w-50" >
                                   <FormControl
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                   />
                                   <Button>search</Button>
                              </InputGroup>

                         </Col>
                    </Row>
               </Container>

          </div >
     );
};

export default Banner;