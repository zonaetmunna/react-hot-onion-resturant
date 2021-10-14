import React from 'react';
import { Col, Container, FormControl, Button, Image, InputGroup, Row } from 'react-bootstrap';
import img from '../../../images/bannerbackground.png'
const Banner = () => {

     const sectionStyle = {
          backgroundImage: `url(${img})`,

          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
     };

     return (
          <div >
               <Container style={sectionStyle}>
                    <Row className="">
                         <Col xs={12} md={12} className="p-5 m-5"  >
                              <h1 className="text-center">Best food waiting for your belly</h1>
                              <InputGroup className="mt-5 mb-5 mx-auto w-50" >
                                   <FormControl
                                        placeholder="search your food"
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