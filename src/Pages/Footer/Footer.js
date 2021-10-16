import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/logo2.png';

const Footer = () => {
     return (
          <div className="bg-dark text-white">
               <Container >
                    <Row className="p-4">
                         <Col md={4}>
                              <Image src={img} width="150" height="100"></Image>
                         </Col>
                         <Col md={4}>
                              <Link to="" className="text-decoration-none">About Online Food</Link>
                              <br />
                              <Link to="" className="text-decoration-none">Read Our Blog</Link>
                              <br />
                              <Link to="" className="text-decoration-none">Sign Up to delivery</Link>
                              <br />
                              <Link to="" className="text-decoration-none">Add Your Restaurant</Link>
                         </Col>
                         <Col md={4} >
                              <Link to="" className="text-decoration-none">Get Help</Link>
                              <br />
                              <Link to="" className="text-decoration-none">Read Faq</Link>
                              <br />
                              <Link to="" className="text-decoration-none">View all Cities</Link>
                              <br />
                              <Link to="" className="text-decoration-none">Restaurant near me</Link>
                         </Col>
                    </Row>
                    <Col className="d-flex justify-content-around">
                         <p>copyright @ 2020 online food</p>
                         <p>privacy policy </p>
                         <p>Teams of Use</p>
                    </Col>


               </Container>
          </div >
     );
};

export default Footer;